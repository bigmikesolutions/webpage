<template>
  <a
    :href="item.url"
    target="_blank"
    rel="noopener noreferrer"
    class="group flex flex-col overflow-hidden rounded-xl border border-slate-200 bg-white shadow-soft transition hover:border-brand-300 hover:shadow-lg sm:flex-row"
    :class="large ? 'lg:min-h-[280px]' : 'gap-4 p-4 sm:gap-6 sm:p-5'"
  >
    <div
      class="relative shrink-0 overflow-hidden bg-slate-100"
      :class="
        large
          ? 'aspect-video w-full sm:aspect-auto sm:w-2/5 lg:w-[42%] lg:min-h-[280px]'
          : 'h-24 w-full sm:h-28 sm:w-44'
      "
    >
      <img
        :src="thumbnail"
        :alt="title"
        class="h-full w-full object-cover transition group-hover:scale-105"
      />
      <div
        v-if="item.type === 'youtube'"
        class="absolute inset-0 flex items-center justify-center bg-black/25 transition group-hover:bg-black/35"
      >
        <span
          class="flex items-center justify-center rounded-full bg-red-600 text-white shadow-lg"
          :class="large ? 'h-16 w-16 lg:h-20 lg:w-20' : 'h-10 w-10'"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            :class="large ? 'h-8 w-8 lg:h-10 lg:w-10' : 'h-5 w-5'"
          >
            <path d="M8 5v14l11-7z" />
          </svg>
        </span>
      </div>
    </div>

    <div
      class="flex min-w-0 flex-1 flex-col justify-center"
      :class="large ? 'gap-3 p-6 sm:p-8 lg:gap-4 lg:p-10' : ''"
    >
      <div class="flex flex-wrap items-center gap-2 lg:gap-3">
        <NewsTypeBadge :type="item.type" />
        <time
          :datetime="item.publishedAt"
          class="text-slate-500"
          :class="large ? 'text-sm lg:text-base' : 'text-xs'"
        >
          {{ formattedDate }}
        </time>
      </div>
      <h3
        class="font-semibold text-slate-900 group-hover:text-brand-700"
        :class="
          large
            ? 'text-xl leading-snug sm:text-2xl lg:text-3xl lg:leading-tight'
            : 'mt-2 text-base sm:text-lg'
        "
      >
        {{ title }}
      </h3>
      <p class="text-slate-500" :class="large ? 'text-base lg:text-lg' : 'mt-1 text-sm'">
        {{ domain }}
      </p>

      <span
        v-if="large"
        class="mt-2 inline-flex items-center gap-2 text-sm font-medium text-brand-700 lg:mt-4 lg:text-base"
      >
        {{ $t('news.openLink') }}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="h-4 w-4 transition group-hover:translate-x-0.5 lg:h-5 lg:w-5"
        >
          <path d="M5 12h14" />
          <path d="m12 5 7 7-7 7" />
        </svg>
      </span>
    </div>

    <div v-if="!large" class="hidden shrink-0 self-center sm:block">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="h-5 w-5 text-slate-400 transition group-hover:translate-x-0.5 group-hover:text-brand-600"
      >
        <path d="M5 12h14" />
        <path d="m12 5 7 7-7 7" />
      </svg>
    </div>
  </a>
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
    large?: boolean
  }>(),
  { large: false },
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

const domain = computed(() => {
  try {
    return new URL(props.item.url).hostname.replace(/^www\./, '')
  } catch {
    return props.item.url
  }
})
</script>
