<template>
  <div class="flex flex-wrap gap-2" role="group" :aria-label="$t('news.filterLabel')">
    <button
      v-for="option in options"
      :key="option.value"
      type="button"
      class="filter-btn"
      :class="{ 'filter-btn--active': modelValue === option.value }"
      @click="$emit('update:modelValue', option.value)"
    >
      {{ $t(option.labelKey) }}
    </button>
  </div>
</template>

<script setup lang="ts">
import type { NewsFilter } from '@/config/newsConfig'

defineProps<{
  modelValue: NewsFilter
}>()

defineEmits<{
  'update:modelValue': [value: NewsFilter]
}>()

const options: { value: NewsFilter; labelKey: string }[] = [
  { value: 'all', labelKey: 'news.filterAll' },
  { value: 'article', labelKey: 'news.filterArticle' },
  { value: 'youtube', labelKey: 'news.filterYoutube' },
  { value: 'publication', labelKey: 'news.filterPublication' },
]
</script>

<style scoped>
.filter-btn {
  @apply rounded-full border border-slate-200 bg-white px-4 py-1.5 text-sm font-medium text-slate-600 transition hover:border-brand-300 hover:text-slate-900;
}
.filter-btn--active {
  @apply border-brand-500 bg-brand-100 text-slate-900 ring-1 ring-brand-300/60;
}
</style>
