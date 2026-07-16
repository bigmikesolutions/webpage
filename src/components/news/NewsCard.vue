<template>
  <article class="flex flex-col gap-3">
    <div class="flex items-center gap-2">
      <NewsTypeBadge :type="item.type" />
      <time :datetime="item.publishedAt" class="text-xs text-slate-500">{{ formattedDate }}</time>
    </div>

    <!-- YouTube embed (home grid) -->
    <div
      v-if="item.type === 'youtube' && embedYoutube"
      class="relative aspect-video w-full overflow-hidden rounded-xl shadow-soft"
    >
      <iframe
        width="100%"
        height="100%"
        :src="`https://www.youtube.com/embed/${item.youtubeId}`"
        :title="title"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
        class="border-0"
      ></iframe>
    </div>

    <!-- Link card (articles, publications, or YouTube thumbnail) -->
    <a
      v-else
      :href="item.url"
      target="_blank"
      rel="noopener noreferrer"
      class="group block"
    >
      <div class="relative aspect-video w-full overflow-hidden rounded-xl shadow-soft">
        <img
          :src="thumbnail"
          :alt="title"
          class="h-full w-full object-cover transition group-hover:scale-105"
        />
        <div
          v-if="item.type === 'youtube'"
          class="absolute inset-0 flex items-center justify-center bg-black/20 transition group-hover:bg-black/30"
        >
          <span
            class="flex h-14 w-14 items-center justify-center rounded-full bg-red-600 text-white shadow-lg"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="h-7 w-7">
              <path d="M8 5v14l11-7z" />
            </svg>
          </span>
        </div>
        <div
          class="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-4 pt-12"
        >
          <h3 class="text-sm font-semibold leading-tight text-white sm:text-base">{{ title }}</h3>
        </div>
      </div>
    </a>

    <h3 v-if="item.type === 'youtube' && embedYoutube" class="text-sm font-semibold text-slate-900">
      {{ title }}
    </h3>
  </article>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import type { NewsItem } from '@/config/newsConfig'
import { useNewsDate } from '@/composables/useNewsDate'
import NewsTypeBadge from './NewsTypeBadge.vue'

const props = withDefaults(
  defineProps<{
    item: NewsItem
    embedYoutube?: boolean
  }>(),
  { embedYoutube: false },
)

const { t } = useI18n()
const formattedDate = useNewsDate(props.item.publishedAt)

const title = computed(() => t(`news.${props.item.titleKey}`))

const thumbnail = computed(() => {
  if (props.item.image) return props.item.image
  if (props.item.youtubeId) {
    return `https://img.youtube.com/vi/${props.item.youtubeId}/hqdefault.jpg`
  }
  return ''
})
</script>
