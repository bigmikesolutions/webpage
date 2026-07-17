<script setup lang="ts">
import { computed, inject, nextTick, onMounted, onUnmounted, ref } from 'vue'
import { resumeCompanies, resumeInternships } from '@/config/resumeConfig'
import { resumeSectionsKey } from '@/composables/useResumeSections'

export interface ProgressMarker {
  id: string
  label: string
  /** Optional secondary label (e.g. start year) */
  meta?: string
  /** DOM target to scroll to */
  targetId: string
  kind: 'section' | 'company'
}

const props = defineProps<{
  sectionLabel: (id: string) => string
  hideLabel: string
  showLabel: string
}>()

const open = ref(false)
const activeId = ref('general')
const progress = ref(0)
const sections = inject(resumeSectionsKey, null)

const markers = computed<ProgressMarker[]>(() => {
  const companyMarkers: ProgressMarker[] = resumeCompanies.map((company) => ({
    id: `company-${company.id}`,
    label: company.name,
    meta: company.start.slice(0, 4),
    targetId: `company-${company.id}`,
    kind: 'company' as const,
  }))

  const internshipMarkers: ProgressMarker[] = resumeInternships.map((internship) => ({
    id: `internship-${internship.id}`,
    label: internship.name,
    meta: internship.start.slice(0, 4),
    targetId: `internship-${internship.id}`,
    kind: 'company' as const,
  }))

  return [
    {
      id: 'general',
      label: props.sectionLabel('general'),
      targetId: 'general',
      kind: 'section',
    },
    {
      id: 'experience',
      label: props.sectionLabel('experience'),
      targetId: 'experience',
      kind: 'section',
    },
    ...companyMarkers,
    {
      id: 'internships',
      label: props.sectionLabel('internships'),
      targetId: 'internships',
      kind: 'section',
    },
    ...internshipMarkers,
    {
      id: 'tech',
      label: props.sectionLabel('tech'),
      targetId: 'tech',
      kind: 'section',
    },
    {
      id: 'publications',
      label: props.sectionLabel('publications'),
      targetId: 'publications',
      kind: 'section',
    },
  ]
})

const activeIndex = computed(() => {
  const idx = markers.value.findIndex((m) => m.id === activeId.value)
  return idx >= 0 ? idx : 0
})

function isReached(index: number): boolean {
  return index <= activeIndex.value
}

function isMarkerMeasurable(el: HTMLElement): boolean {
  if (!el.isConnected) return false
  const style = window.getComputedStyle(el)
  if (style.display === 'none' || style.visibility === 'hidden') return false
  const rect = el.getBoundingClientRect()
  return rect.width > 0 || rect.height > 0
}

function markerDocumentTop(el: HTMLElement): number | null {
  if (!isMarkerMeasurable(el)) return null
  return el.getBoundingClientRect().top + window.scrollY
}

function syncProgress() {
  const last = Math.max(1, markers.value.length - 1)
  const idx = markers.value.findIndex((m) => m.id === activeId.value)
  progress.value = idx >= 0 ? idx / last : 0
}

let navLockUntil = 0

async function scrollToMarker(marker: ProgressMarker) {
  sections?.expandForTarget(marker.targetId)
  await nextTick()
  await new Promise<void>((resolve) => requestAnimationFrame(() => resolve()))

  const el = document.getElementById(marker.targetId)
  if (!el) return

  navLockUntil = Date.now() + 900
  activeId.value = marker.id
  syncProgress()
  el.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

function updateFromScroll() {
  if (Date.now() < navLockUntil) return

  const headerOffset = 100
  const probe = window.scrollY + headerOffset

  let current = markers.value[0]?.id ?? 'general'

  for (const marker of markers.value) {
    const el = document.getElementById(marker.targetId)
    if (!el) continue
    const top = markerDocumentTop(el)
    if (top === null) continue
    if (top <= probe) {
      current = marker.id
    }
  }

  activeId.value = current
  syncProgress()
}

let resizeObserver: ResizeObserver | null = null
let rafId = 0
let unsubscribeLayout: (() => void) | undefined

function scheduleUpdate() {
  cancelAnimationFrame(rafId)
  rafId = requestAnimationFrame(updateFromScroll)
}

onMounted(async () => {
  // Client nav from a scrolled page can leave a high scrollY briefly; start at top.
  window.scrollTo(0, 0)
  activeId.value = 'general'
  progress.value = 0

  unsubscribeLayout = sections?.onLayoutChange(scheduleUpdate)

  await nextTick()
  scheduleUpdate()
  // Second frame: layout/images may still settle after first paint.
  requestAnimationFrame(() => scheduleUpdate())

  window.addEventListener('scroll', updateFromScroll, { passive: true })
  window.addEventListener('resize', updateFromScroll)

  resizeObserver = new ResizeObserver(scheduleUpdate)
  resizeObserver.observe(document.documentElement)
})

onUnmounted(() => {
  unsubscribeLayout?.()
  cancelAnimationFrame(rafId)
  window.removeEventListener('scroll', updateFromScroll)
  window.removeEventListener('resize', updateFromScroll)
  resizeObserver?.disconnect()
  resizeObserver = null
})
</script>

<template>
  <div class="pointer-events-none fixed inset-0 z-40 hidden lg:block print:hidden">
    <button
      v-if="!open"
      type="button"
      class="pointer-events-auto absolute right-4 top-1/2 flex -translate-y-1/2 flex-col items-center gap-1 rounded-l-xl border border-slate-200 bg-white/95 px-2 py-3 shadow-lg backdrop-blur transition hover:bg-white xl:right-6"
      :aria-label="showLabel"
      @click="open = true"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="h-4 w-4 text-slate-600"
        aria-hidden="true"
      >
        <path d="m15 18-6-6 6-6" />
      </svg>
      <span class="h-16 w-1 overflow-hidden rounded-full bg-slate-200" aria-hidden="true">
        <span
          class="block w-full rounded-full bg-brand-500"
          :style="{ height: `${progress * 100}%` }"
        />
      </span>
    </button>

    <aside
      v-show="open"
      class="pointer-events-auto absolute right-4 top-1/2 max-h-[80vh] w-52 -translate-y-1/2 overflow-y-auto rounded-xl border border-slate-200/80 bg-white/95 p-3 shadow-xl backdrop-blur-md xl:right-6 xl:w-56"
      role="dialog"
      :aria-label="sectionLabel('nav')"
    >
      <div class="mb-2 flex items-center justify-between gap-2">
        <span class="text-[10px] font-semibold uppercase tracking-wider text-slate-400">
          {{ sectionLabel('nav') }}
        </span>
        <button
          type="button"
          class="inline-flex h-7 w-7 items-center justify-center rounded-md text-slate-500 transition hover:bg-slate-100 hover:text-slate-800"
          :aria-label="hideLabel"
          @click="open = false"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="h-4 w-4"
            aria-hidden="true"
          >
            <path d="M18 6 6 18" />
            <path d="m6 6 12 12" />
          </svg>
        </button>
      </div>

      <div class="relative pl-3">
        <div
          class="absolute bottom-1 left-[7px] top-1 w-0.5 rounded-full bg-slate-200"
          aria-hidden="true"
        >
          <div
            class="w-full origin-top rounded-full bg-brand-500 transition-[height] duration-200"
            :style="{ height: `${progress * 100}%` }"
          />
        </div>

        <ol class="relative space-y-2.5">
          <li v-for="(marker, index) in markers" :key="marker.id">
            <button
              type="button"
              class="group flex w-full items-start gap-2.5 text-left"
              :class="marker.kind === 'company' ? 'pl-0.5' : ''"
              @click="scrollToMarker(marker)"
            >
              <span
                class="relative z-10 mt-0.5 shrink-0 rounded-full border-2 transition"
                :class="[
                  marker.kind === 'section' ? 'h-3.5 w-3.5' : 'h-2.5 w-2.5',
                  isReached(index)
                    ? 'border-brand-500 bg-brand-500'
                    : 'border-slate-300 bg-white group-hover:border-brand-400',
                  activeId === marker.id ? 'ring-2 ring-brand-300 ring-offset-1' : '',
                ]"
              />
              <span class="min-w-0 leading-tight">
                <span
                  class="block transition"
                  :class="[
                    marker.kind === 'section'
                      ? 'text-xs font-semibold uppercase tracking-wide'
                      : 'truncate text-[11px] font-medium',
                    activeId === marker.id
                      ? 'text-slate-900'
                      : isReached(index)
                        ? 'text-slate-600'
                        : 'text-slate-400 group-hover:text-slate-600',
                  ]"
                >
                  {{ marker.label }}
                </span>
                <span
                  v-if="marker.meta"
                  class="mt-0.5 block text-[10px] tabular-nums text-slate-400"
                >
                  {{ marker.meta }}
                </span>
              </span>
            </button>
          </li>
        </ol>
      </div>
    </aside>
  </div>
</template>
