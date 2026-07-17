<script setup lang="ts">
import { computed, onMounted, onUnmounted, ref } from 'vue'
import type { TechGroup, TechSummaryItem } from '@/config/resumeConfig'

const props = defineProps<{
  item: TechSummaryItem
  groupLabel: string
  yearsLabel: string
}>()

const open = ref(false)
const root = ref<HTMLElement | null>(null)

const groupClasses: Record<TechGroup, { card: string; badge: string }> = {
  frontend: {
    card: 'border-sky-200 bg-sky-50/50 hover:border-sky-300',
    badge: 'bg-sky-100 text-sky-800',
  },
  backend: {
    card: 'border-emerald-200 bg-emerald-50/50 hover:border-emerald-300',
    badge: 'bg-emerald-100 text-emerald-800',
  },
  devops: {
    card: 'border-violet-200 bg-violet-50/50 hover:border-violet-300',
    badge: 'bg-violet-100 text-violet-800',
  },
  mobile: {
    card: 'border-amber-200 bg-amber-50/50 hover:border-amber-300',
    badge: 'bg-amber-100 text-amber-800',
  },
}

const classes = computed(() => groupClasses[props.item.group])

function toggle() {
  open.value = !open.value
}

function onDocClick(event: MouseEvent) {
  if (!open.value || !root.value) return
  if (!root.value.contains(event.target as Node)) {
    open.value = false
  }
}

function onKey(event: KeyboardEvent) {
  if (event.key === 'Escape') open.value = false
}

onMounted(() => {
  document.addEventListener('click', onDocClick)
  document.addEventListener('keydown', onKey)
})

onUnmounted(() => {
  document.removeEventListener('click', onDocClick)
  document.removeEventListener('keydown', onKey)
})
</script>

<template>
  <div ref="root" class="relative">
    <button
      type="button"
      class="flex w-full items-center justify-between gap-3 rounded-lg border px-4 py-3 text-left transition hover:shadow-sm"
      :class="classes.card"
      :aria-expanded="open"
      @click="toggle"
    >
      <div class="min-w-0">
        <span class="font-medium text-slate-900">{{ item.name }}</span>
        <span
          class="mt-1 inline-flex rounded-full px-2 py-0.5 text-xs font-medium"
          :class="classes.badge"
        >
          {{ groupLabel }}
        </span>
      </div>
      <span class="shrink-0 text-sm font-semibold tabular-nums text-slate-700">
        {{ yearsLabel }}
      </span>
    </button>

    <div
      v-if="open"
      class="absolute left-0 right-0 top-full z-20 mt-2 rounded-lg border bg-white p-4 shadow-xl"
      :class="classes.card"
      role="dialog"
      :aria-label="item.name"
    >
      <p class="text-sm font-semibold text-slate-900">{{ item.name }}</p>
      <p class="mt-1">
        <span
          class="inline-flex rounded-full px-2 py-0.5 text-xs font-medium"
          :class="classes.badge"
        >
          {{ groupLabel }}
        </span>
      </p>
      <p class="mt-3 text-sm text-slate-600">
        {{ yearsLabel }}
      </p>
    </div>
  </div>
</template>
