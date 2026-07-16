<script setup lang="ts">
import { computed, onMounted, onUnmounted, ref } from 'vue'
import { resumeCompanies } from '@/config/resumeConfig'

export interface ProgressMarker {
  id: string
  label: string
  /** DOM target to scroll to */
  targetId: string
  kind: 'section' | 'year'
}

const props = defineProps<{
  sectionLabel: (id: string) => string
  hideLabel: string
  showLabel: string
}>()

const open = ref(true)
const activeId = ref('general')
const progress = ref(0)

/** Unique start years, newest first (matches experience list order feel). */
const experienceYears = computed(() => {
  const years = resumeCompanies.map((c) => Number(c.start.slice(0, 4)))
  const unique = [...new Set(years)].sort((a, b) => b - a)
  const currentYear = new Date().getFullYear()
  if (!unique.includes(currentYear)) {
    unique.unshift(currentYear)
  }
  return unique
})

const markers = computed<ProgressMarker[]>(() => {
  const yearMarkers: ProgressMarker[] = experienceYears.value.map((year) => ({
    id: `year-${year}`,
    label: String(year),
    targetId: targetForYear(year),
    kind: 'year' as const,
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
    ...yearMarkers,
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

function targetForYear(year: number): string {
  if (year === new Date().getFullYear()) return 'experience'
  const company = resumeCompanies.find((c) => Number(c.start.slice(0, 4)) === year)
  return company ? `company-${company.id}` : 'experience'
}

const activeIndex = computed(() => {
  const idx = markers.value.findIndex((m) => m.id === activeId.value)
  return idx >= 0 ? idx : 0
})

function isReached(index: number): boolean {
  return index <= activeIndex.value
}

function scrollToMarker(marker: ProgressMarker) {
  const el = document.getElementById(marker.targetId)
  if (!el) return
  el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  activeId.value = marker.id
}

function updateFromScroll() {
  const headerOffset = 100
  const probe = window.scrollY + headerOffset + window.innerHeight * 0.2

  let current = markers.value[0]?.id ?? 'general'

  for (const marker of markers.value) {
    const el = document.getElementById(marker.targetId)
    if (!el) continue
    const top = el.getBoundingClientRect().top + window.scrollY
    if (top <= probe) {
      current = marker.id
    }
  }

  activeId.value = current

  const last = Math.max(1, markers.value.length - 1)
  const idx = markers.value.findIndex((m) => m.id === current)
  progress.value = idx >= 0 ? idx / last : 0
}

onMounted(() => {
  updateFromScroll()
  window.addEventListener('scroll', updateFromScroll, { passive: true })
  window.addEventListener('resize', updateFromScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', updateFromScroll)
  window.removeEventListener('resize', updateFromScroll)
})
</script>

<template>
  <div class="pointer-events-none fixed inset-0 z-40 hidden lg:block print:hidden">
    <!-- Collapsed: reopen chip -->
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
      <span
        class="h-16 w-1 overflow-hidden rounded-full bg-slate-200"
        aria-hidden="true"
      >
        <span
          class="block w-full rounded-full bg-brand-500"
          :style="{ height: `${progress * 100}%` }"
        />
      </span>
    </button>

    <!-- Expanded overlay panel -->
    <aside
      v-show="open"
      class="pointer-events-auto absolute right-4 top-1/2 w-40 -translate-y-1/2 rounded-xl border border-slate-200/80 bg-white/95 p-3 shadow-xl backdrop-blur-md xl:right-6 xl:w-44"
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
              class="group flex w-full items-center gap-2.5 text-left"
              :class="marker.kind === 'year' ? 'pl-0.5' : ''"
              @click="scrollToMarker(marker)"
            >
              <span
                class="relative z-10 shrink-0 rounded-full border-2 transition"
                :class="[
                  marker.kind === 'section' ? 'h-3.5 w-3.5' : 'h-2.5 w-2.5',
                  isReached(index)
                    ? 'border-brand-500 bg-brand-500'
                    : 'border-slate-300 bg-white group-hover:border-brand-400',
                  activeId === marker.id ? 'ring-2 ring-brand-300 ring-offset-1' : '',
                ]"
              />
              <span
                class="leading-tight transition"
                :class="[
                  marker.kind === 'section'
                    ? 'text-xs font-semibold uppercase tracking-wide'
                    : 'text-[11px] font-medium tabular-nums',
                  activeId === marker.id
                    ? 'text-slate-900'
                    : isReached(index)
                      ? 'text-slate-600'
                      : 'text-slate-400 group-hover:text-slate-600',
                ]"
              >
                {{ marker.label }}
              </span>
            </button>
          </li>
        </ol>
      </div>
    </aside>
  </div>
</template>
