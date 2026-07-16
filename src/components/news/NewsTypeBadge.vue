<template>
  <span class="badge" :class="badgeClass">{{ $t(typeLabelKey) }}</span>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import type { NewsType } from '@/config/newsConfig'

const props = defineProps<{
  type: NewsType
}>()

const typeLabelKey = computed(() => {
  const keys: Record<NewsType, string> = {
    article: 'news.typeArticle',
    youtube: 'news.typeYoutube',
    publication: 'news.typePublication',
  }
  return keys[props.type]
})

const badgeClass = computed(() => {
  const classes: Record<NewsType, string> = {
    article: 'badge--article',
    youtube: 'badge--youtube',
    publication: 'badge--publication',
  }
  return classes[props.type]
})
</script>

<style scoped>
.badge {
  @apply inline-flex rounded-full px-2.5 py-0.5 text-xs font-medium;
}
.badge--article {
  @apply bg-sky-100 text-sky-800;
}
.badge--youtube {
  @apply bg-red-100 text-red-800;
}
.badge--publication {
  @apply bg-amber-100 text-amber-800;
}
</style>
