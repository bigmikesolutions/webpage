<template>
  <div
    class="flex flex-wrap items-center gap-2"
    role="group"
    :aria-label="$t('news.filterLabel')"
  >
    <button
      v-for="option in typeOptions"
      :key="option.value"
      type="button"
      class="filter-btn"
      :class="{ 'filter-btn--active': selectedTypes.includes(option.value) }"
      :aria-pressed="selectedTypes.includes(option.value)"
      @click="toggleType(option.value)"
    >
      {{ $t(option.labelKey) }}
    </button>

    <span class="mx-1 hidden h-5 w-px bg-slate-300 sm:block" aria-hidden="true"></span>

    <button
      v-for="option in countOptions"
      :key="String(option.value)"
      type="button"
      class="filter-btn"
      :class="{ 'filter-btn--active': isCountActive(option.value) }"
      @click="$emit('update:countFilter', option.value)"
    >
      {{ $t(option.labelKey) }}
    </button>
  </div>
</template>

<script setup lang="ts">
import type { NewsCountFilter, NewsType } from '@/config/newsConfig'

const props = defineProps<{
  selectedTypes: NewsType[]
  countFilter: NewsCountFilter
  isDesktop: boolean
}>()

const emit = defineEmits<{
  'update:selectedTypes': [value: NewsType[]]
  'update:countFilter': [value: NewsCountFilter]
}>()

const typeOptions: { value: NewsType; labelKey: string }[] = [
  { value: 'article', labelKey: 'news.filterArticle' },
  { value: 'youtube', labelKey: 'news.filterYoutube' },
  { value: 'publication', labelKey: 'news.filterPublication' },
]

const countOptions: { value: NewsCountFilter; labelKey: string }[] = [
  { value: 1, labelKey: 'news.filterCount1' },
  { value: 3, labelKey: 'news.filterCount3' },
  { value: 5, labelKey: 'news.filterCount5' },
]

function toggleType(type: NewsType) {
  const next = props.selectedTypes.includes(type)
    ? props.selectedTypes.filter((t) => t !== type)
    : [...props.selectedTypes, type]
  emit('update:selectedTypes', next)
}

function isCountActive(value: NewsCountFilter): boolean {
  if (props.countFilter === 'auto') {
    return props.isDesktop ? value === 3 : value === 1
  }
  return props.countFilter === value
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
