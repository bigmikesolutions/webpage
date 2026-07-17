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
      :class="selectedGroups.includes(group) ? groupActiveClass[group] : ''"
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

const groupActiveClass: Record<TechGroup, string> = {
  frontend: 'filter-btn--frontend',
  backend: 'filter-btn--backend',
  devops: 'filter-btn--devops',
  mobile: 'filter-btn--mobile',
}

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
.filter-btn--frontend {
  @apply border-sky-500 bg-sky-100 text-sky-900 ring-1 ring-sky-300/60;
}
.filter-btn--backend {
  @apply border-emerald-500 bg-emerald-100 text-emerald-900 ring-1 ring-emerald-300/60;
}
.filter-btn--devops {
  @apply border-violet-500 bg-violet-100 text-violet-900 ring-1 ring-violet-300/60;
}
.filter-btn--mobile {
  @apply border-amber-500 bg-amber-100 text-amber-900 ring-1 ring-amber-300/60;
}
</style>
