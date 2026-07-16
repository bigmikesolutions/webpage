<template>
  <div
    class="flex flex-wrap items-center gap-2"
    role="group"
    :aria-label="ariaLabel"
  >
    <button
      v-for="group in techGroupOrder"
      :key="group"
      type="button"
      class="filter-btn"
      :class="{ 'filter-btn--active': selectedGroups.includes(group) }"
      :aria-pressed="selectedGroups.includes(group)"
      @click="toggle(group)"
    >
      {{ groupLabel(group) }}
    </button>
  </div>
</template>

<script setup lang="ts">
import { techGroupOrder, type TechGroup } from '@/config/resumeConfig'

const props = defineProps<{
  selectedGroups: TechGroup[]
  ariaLabel: string
  groupLabel: (group: TechGroup) => string
}>()

const emit = defineEmits<{
  'update:selectedGroups': [value: TechGroup[]]
}>()

function toggle(group: TechGroup) {
  const next = props.selectedGroups.includes(group)
    ? props.selectedGroups.filter((g) => g !== group)
    : [...props.selectedGroups, group]
  emit('update:selectedGroups', next)
}
</script>

<style scoped>
.filter-btn {
  @apply rounded-full border border-slate-200 bg-white px-4 py-1.5 text-sm font-medium text-slate-600 transition hover:border-brand-300 hover:text-slate-900;
}
.filter-btn--active {
  @apply border-brand-500 bg-brand-100 text-slate-900 ring-1 ring-brand-300/60;
}
</style>
