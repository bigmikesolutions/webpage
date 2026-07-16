<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'
import type { TechSummaryItem } from '@/config/resumeConfig'
import TechLevelDots from '@/components/resume/TechLevelDots.vue'

const props = defineProps<{
  item: TechSummaryItem
  groupLabel: string
  levelLabel: string
  yearsLabel: string
}>()

const open = ref(false)
const root = ref<HTMLElement | null>(null)

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
      class="flex w-full items-center justify-between gap-3 rounded-lg border border-slate-200 bg-white px-4 py-3 text-left transition hover:border-brand-300 hover:shadow-sm"
      :aria-expanded="open"
      @click="toggle"
    >
      <div class="min-w-0">
        <span class="font-medium text-slate-900">{{ item.name }}</span>
        <span class="mt-0.5 block text-xs text-slate-500">{{ groupLabel }}</span>
      </div>
      <TechLevelDots :level="item.level" />
    </button>

    <div
      v-if="open"
      class="absolute left-0 right-0 top-full z-20 mt-2 rounded-lg border border-slate-200 bg-white p-4 shadow-xl"
      role="dialog"
      :aria-label="item.name"
    >
      <p class="text-sm font-semibold text-slate-900">{{ item.name }}</p>
      <p class="mt-1 text-xs text-slate-500">{{ groupLabel }}</p>
      <div class="mt-3 flex items-center gap-2">
        <TechLevelDots :level="item.level" />
        <span class="text-sm text-slate-700">{{ levelLabel }}</span>
      </div>
      <p class="mt-3 text-sm text-slate-600">
        {{ yearsLabel }}
      </p>
    </div>
  </div>
</template>
