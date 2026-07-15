<template>
  <main class="container mx-auto px-4 py-16">
    <RouterLink to="/#news" class="inline-flex items-center gap-1 text-sm text-slate-600 hover:text-slate-900">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="h-4 w-4"
      >
        <path d="m15 18-6-6 6-6" />
      </svg>
      {{ $t('news.backToHome') }}
    </RouterLink>

    <h1 class="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
      {{ $t('news.allTitle') }}
    </h1>
    <p class="mt-2 max-w-3xl text-lg text-slate-600">{{ $t('news.allDescription') }}</p>

    <div class="mt-8">
      <NewsFilter v-model="activeFilter" />
    </div>

    <p v-if="filteredItems.length === 0" class="mt-8 text-slate-600">
      {{ $t('news.emptyFilter') }}
    </p>

    <ul v-else class="mt-10 space-y-6 lg:space-y-8">
      <li v-for="item in filteredItems" :key="item.id">
        <NewsListItem :item="item" large />
      </li>
    </ul>
  </main>
</template>

<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import { RouterLink, useRoute, useRouter } from 'vue-router'
import { filterNews, newsItems, type NewsFilter as NewsFilterType } from '@/config/newsConfig'
import NewsFilter from '@/components/news/NewsFilter.vue'
import NewsListItem from '@/components/news/NewsListItem.vue'

const route = useRoute()
const router = useRouter()

const validFilters: NewsFilterType[] = ['all', 'article', 'youtube', 'publication']

function parseFilter(value: unknown): NewsFilterType {
  return validFilters.includes(value as NewsFilterType) ? (value as NewsFilterType) : 'all'
}

const activeFilter = ref<NewsFilterType>(parseFilter(route.query.type))

watch(activeFilter, (filter) => {
  const query = filter === 'all' ? {} : { type: filter }
  router.replace({ query })
})

watch(
  () => route.query.type,
  (type) => {
    activeFilter.value = parseFilter(type)
  },
)

const filteredItems = computed(() => filterNews(newsItems, activeFilter.value))
</script>
