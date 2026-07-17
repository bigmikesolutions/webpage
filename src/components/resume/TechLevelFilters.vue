<script setup lang="ts">
import { techLevelOrder, type TechLevel } from '@/config/resumeConfig'

const props = defineProps<{
  selectedLevels: TechLevel[]
  ariaLabel: string
  levelLabel: (level: TechLevel) => string
}>()

const emit = defineEmits<{
  'update:selectedLevels': [value: TechLevel[]]
}>()

function toggle(level: TechLevel) {
  const next = props.selectedLevels.includes(level)
    ? props.selectedLevels.filter((l) => l !== level)
    : [...props.selectedLevels, level]
  emit('update:selectedLevels', next)
}
</script>

<template>
  <div class="flex flex-wrap items-center gap-2" role="group" :aria-label="ariaLabel">
    <button
      v-for="level in techLevelOrder"
      :key="level"
      type="button"
      class="filter-btn inline-flex items-center gap-2"
      :class="{ 'filter-btn--active': selectedLevels.includes(level) }"
      :aria-pressed="selectedLevels.includes(level)"
      :aria-label="levelLabel(level)"
      :title="levelLabel(level)"
      @click="toggle(level)"
    >
      <span>{{ levelLabel(level) }}</span>
    </button>
  </div>
</template>

<style scoped>
.filter-btn {
  @apply rounded-full border border-slate-200 bg-white px-3 py-1.5 text-sm font-medium text-slate-600 transition hover:border-brand-300 hover:text-slate-900;
}
.filter-btn--active {
  @apply border-brand-500 bg-brand-100 text-slate-900 ring-1 ring-brand-300/60;
}
</style>
