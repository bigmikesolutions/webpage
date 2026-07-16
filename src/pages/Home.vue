<template>
  <main>
    <!-- Hero / About -->
    <section class="relative overflow-hidden bg-gradient-to-b from-brand-100 via-brand-50 to-white">
      <div
        class="absolute inset-x-0 -top-24 -z-10 h-56 bg-[radial-gradient(50%_50%_at_50%_0%,theme(colors.brand.300/.45),transparent_70%)]"
      ></div>
      <div class="container mx-auto grid px-4 py-20 md:grid-cols-2 md:items-center md:gap-12">
        <div>
          <span
            class="inline-flex items-center gap-2 rounded-full bg-brand-200/70 px-3 py-1 text-xs font-medium text-slate-900 ring-1 ring-brand-300/60"
            >{{ $t('about.badge') }}</span
          >
          <h1 class="mt-4 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            {{ $t('about.heading') }}
          </h1>
          <p class="mt-4 text-lg text-slate-700">{{ $t('about.pitch') }}</p>
          <div class="mt-8 flex flex-wrap items-center gap-3">
            <a href="mailto:contact@bigmikesolutions.pl" class="btn">{{ $t('about.buttons.work') }}</a>
            <RouterLink to="/#services" class="btn btn--ghost">{{ $t('about.buttons.view') }}</RouterLink>
            <a
              href="https://github.com/m-wrona"
              target="_blank"
              rel="noopener noreferrer"
              class="btn btn--ghost inline-flex items-center gap-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                class="h-4 w-4"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.38 7.86 10.9.58.11.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.88-1.54-3.88-1.54-.53-1.36-1.3-1.72-1.3-1.72-1.06-.73.08-.71.08-.71 1.17.08 1.79 1.2 1.79 1.2 1.04 1.78 2.73 1.27 3.4.97.11-.75.41-1.27.75-1.56-2.55-.29-5.23-1.27-5.23-5.66 0-1.25.45-2.28 1.19-3.09-.12-.29-.52-1.47.11-3.07 0 0 .97-.31 3.18 1.18.92-.26 1.9-.39 2.88-.39.98 0 1.96.13 2.88.39 2.2-1.49 3.17-1.18 3.17-1.18.63 1.6.23 2.78.11 3.07.74.81 1.19 1.84 1.19 3.09 0 4.4-2.69 5.36-5.25 5.64.42.36.79 1.07.79 2.15 0 1.55-.01 2.8-.01 3.18 0 .31.21.68.8.56C20.71 21.38 24 17.08 24 12c0-6.27-5.23-11.5-12-11.5z"
                />
              </svg>
              <span>{{ $t('about.buttons.github') }}</span>
            </a>
          </div>
        </div>
        <div class="mt-10 md:mt-0">
          <div
            class="relative mx-auto aspect-square max-w-sm rounded-2xl bg-gradient-to-tr from-brand-400 to-brand-200 p-1 shadow-soft"
          >
            <div class="h-full w-full rounded-2xl bg-white p-1">
              <div class="overflow-hidden rounded-xl h-full">
                <img
                  src="/images/michal-wronski.jpg"
                  alt="Big Mike"
                  class="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
          <dl class="mx-auto mt-8 grid max-w-sm grid-cols-3 gap-6 text-center">
            <div class="stat">
              <dt>{{ $t('stats.projects_label') }}</dt>
              <dd>{{ $t('stats.projects_value') }}</dd>
            </div>
            <div class="stat">
              <dt>{{ $t('stats.uplift_label') }}</dt>
              <dd>{{ $t('stats.uplift_value') }}</dd>
            </div>
            <div class="stat">
              <dt>{{ $t('stats.years_label') }}</dt>
              <dd>{{ $t('stats.years_value') }}</dd>
            </div>
          </dl>
        </div>
      </div>
    </section>

    <!-- Services -->
    <section id="services" class="container mx-auto px-4 py-16">
      <div class="flex items-end justify-between">
        <div>
          <h2 class="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
            {{ $t('services.title') }}
          </h2>
          <p class="mt-2 max-w-2xl text-slate-600">{{ $t('services.description') }}</p>
        </div>
        <a
          href="mailto:contact@bigmikesolutions.pl"
          class="hidden md:inline-flex btn btn--ghost"
          >{{ $t('buttons.send') }}</a
        >
      </div>
      <div class="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <article v-for="(service, index) in services" :key="index" class="card">
          <div class="card-icon">
            <!-- Software Design (index 0) -->
            <svg
              v-if="index === 0"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              class="h-6 w-6"
            >
              <path
                d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"
              />
            </svg>
            <!-- Backend Development (index 1) -->
            <svg
              v-else-if="index === 1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              class="h-6 w-6"
            >
              <path
                d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2zm0 4v8h16V8H4zm2 2h12v4H6v-4z"
              />
            </svg>
            <!-- Mobile Solutions (index 2) -->
            <svg
              v-else-if="index === 2"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              class="h-6 w-6"
            >
              <path
                d="M10.5 1.5H8a2 2 0 0 0-2 2v17a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-17a2 2 0 0 0-2-2h-2.5m0 0V0m0 1.5h3m-3 0H12m-1.5 18v-2h3v2"
              />
            </svg>
            <!-- DevOps & SRE (index 3) -->
            <svg
              v-else-if="index === 3"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              class="h-6 w-6"
            >
              <path
                d="M20 17.5A4.5 4.5 0 0 0 15.5 13H13a4 4 0 1 0-7.9 1.2A3.5 3.5 0 0 0 7.5 20H20"
              />
            </svg>
            <!-- AI (index 4) -->
            <svg
              v-else-if="index === 4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              class="h-6 w-6"
            >
              <path
                d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"
              />
              <circle cx="9" cy="8" r="1" />
              <circle cx="15" cy="8" r="1" />
            </svg>
            <!-- Production Maintenance (index 5) -->
            <svg
              v-else-if="index === 5"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              class="h-6 w-6"
            >
              <path
                d="M12 1.5 3 6v6c0 6.075 4.925 9.75 9 10.5 4.075-.75 9-4.425 9-10.5V6l-9-4.5Z"
              />
            </svg>
            <!-- Default icon -->
            <svg
              v-else
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              class="h-6 w-6"
            >
              <path d="M12 3v18m9-9H3" />
            </svg>
          </div>
          <h3>{{ service.title }}</h3>
          <p>{{ service.description }}</p>
          <ul class="feature-list">
            <li v-for="(feature, idx) in service.features" :key="idx">{{ feature }}</li>
          </ul>
        </article>
      </div>

      <!-- Products -->
      <div id="products" class="mt-12">
        <h3 class="text-xl font-semibold text-slate-900">{{ $t('products.title') }}</h3>
        <p class="mt-2 text-slate-600">{{ $t('products.description') }}</p>

        <a
          class="card mt-6 flex items-center gap-4"
          href="https://nextinlane.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div
            class="inline-flex h-12 w-28 shrink-0 items-center justify-center rounded-lg bg-black px-2"
          >
            <img
              src="/images/products/nil-logo.png"
              alt=""
              class="h-7 w-auto object-contain"
              width="96"
              height="28"
            />
          </div>
          <div>
            <div class="flex flex-wrap items-center gap-2">
              <h4 class="font-semibold">{{ $t('products.nextinlane_title') }}</h4>
              <span class="product-tag">{{ $t('products.tag_product') }}</span>
            </div>
            <p class="mt-1 text-sm text-slate-600">
              {{ $t('products.nextinlane_description') }}
            </p>
          </div>
        </a>

        <div class="mt-4 grid gap-4 sm:grid-cols-2">
          <a
            class="card flex items-center gap-4"
            href="https://wordpress.org/plugins/flex-top-bar/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/images/products/flex-top-bar-icon.svg"
              alt=""
              class="h-12 w-12 shrink-0 rounded-lg"
              width="48"
              height="48"
            />
            <div>
              <div class="flex flex-wrap items-center gap-2">
                <h4 class="font-semibold">{{ $t('products.flex_top_bar_title') }}</h4>
                <span class="product-tag">{{ $t('products.tag_plugin') }}</span>
              </div>
              <p class="mt-1 text-sm text-slate-600">
                {{ $t('products.flex_top_bar_description') }}
              </p>
            </div>
          </a>

          <a
            class="card flex items-center gap-4"
            href="https://github.com/bigmikesolutions/sqlstream"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/images/products/sqlstream.png"
              alt=""
              class="h-12 w-12 shrink-0 rounded-lg object-cover"
              width="48"
              height="48"
            />
            <div>
              <div class="flex flex-wrap items-center gap-2">
                <h4 class="font-semibold">{{ $t('products.sqlstream_title') }}</h4>
                <span class="product-tag">{{ $t('products.tag_lib') }}</span>
              </div>
              <p class="mt-1 text-sm text-slate-600">
                {{ $t('products.sqlstream_description') }}
              </p>
            </div>
          </a>
        </div>
      </div>
    </section>

    <!-- Labs -->
    <section id="news" class="container mx-auto px-4 py-16">
      <div class="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <h2 class="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
            {{ $t('news.title') }}
          </h2>
          <p class="mt-2 max-w-2xl text-slate-600">{{ $t('news.description') }}</p>
        </div>
        <div class="flex flex-wrap gap-3">
          <a
            href="https://bigmikelabs.pl"
            target="_blank"
            rel="noopener noreferrer"
            class="btn btn--ghost inline-flex items-center gap-2"
          >
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
              <path d="M9 2v6l-3 3v1a3 3 0 0 0 3 3h6a3 3 0 0 0 3-3V11l-3-3V2" />
              <path d="M9 2h6" />
              <path d="M12 11v4" />
              <path d="M8 15h8" />
              <path d="M10 19h4" />
            </svg>
            {{ $t('news.visitLabs') }}
          </a>
          <a
            href="https://www.youtube.com/@big-mike-labs"
            target="_blank"
            rel="noopener noreferrer"
            class="btn btn--ghost inline-flex items-center gap-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              class="h-4 w-4"
              fill="currentColor"
            >
              <path
                d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 0 0 .5 6.2 31.6 31.6 0 0 0 0 12a31.6 31.6 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 0 0 2.1-2.1A31.6 31.6 0 0 0 24 12a31.6 31.6 0 0 0-.5-5.8zM9.8 15.5V8.5l6.2 3.5-6.2 3.5z"
              />
            </svg>
            {{ $t('news.visitYoutube') }}
          </a>
        </div>
      </div>

      <div class="mt-6">
        <NewsHomeFilters
          v-model:selected-types="selectedTypes"
          v-model:count-filter="countFilter"
          :is-desktop="isDesktop"
        />
      </div>

      <p v-if="homeNewsGroups.length === 0" class="mt-8 text-slate-600">
        {{ $t('news.emptyFilter') }}
      </p>

      <div v-else class="mt-8 space-y-12">
        <div v-for="group in homeNewsGroups" :key="group.type">
          <h3 class="text-lg font-semibold text-slate-900 sm:text-xl">
            {{ $t(newsTypeHeadingKey[group.type]) }}
          </h3>
          <div class="mt-4 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <NewsCard
              v-for="item in group.items"
              :key="item.id"
              :item="item"
              embed-youtube
            />
          </div>
        </div>
      </div>

      <div v-if="homeNewsGroups.length > 0" class="mt-10 flex justify-center">
        <a
          href="https://bigmikelabs.pl"
          target="_blank"
          rel="noopener noreferrer"
          class="btn inline-flex items-center gap-2"
        >
          {{ $t('news.visitLabs') }}
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
            <path d="M5 12h14" />
            <path d="m12 5 7 7-7 7" />
          </svg>
        </a>
      </div>
    </section>

  </main>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { RouterLink } from 'vue-router'
import { useMediaQuery } from '@/composables/useMediaQuery'
import {
  getHomeNewsGroups,
  newsItems,
  resolveHomeNewsLimit,
  type NewsCountFilter,
  type NewsType,
} from '@/config/newsConfig'
import NewsHomeFilters from '@/components/news/NewsHomeFilters.vue'
import NewsCard from '@/components/news/NewsCard.vue'

const { tm } = useI18n()

const allNewsTypes: NewsType[] = ['article', 'youtube', 'publication']
const selectedTypes = ref<NewsType[]>([...allNewsTypes])
const countFilter = ref<NewsCountFilter>('auto')
const isDesktop = useMediaQuery('(min-width: 768px)')

const newsTypeHeadingKey: Record<NewsType, string> = {
  article: 'news.sectionArticle',
  youtube: 'news.sectionYoutube',
  publication: 'news.sectionPublication',
}

const limitPerType = computed(() => resolveHomeNewsLimit(countFilter.value, isDesktop.value))

const homeNewsGroups = computed(() =>
  getHomeNewsGroups(newsItems, selectedTypes.value, limitPerType.value),
)

interface Service {
  title: string
  description: string
  features: string[]
}

const services = computed<Service[]>(() => tm('services.items') as Service[])
</script>

<style scoped>
.stat dt {
  @apply text-xs uppercase text-slate-500 tracking-wider;
}
.stat dd {
  @apply mt-2 text-3xl md:text-4xl font-extrabold text-slate-900;
}
.card {
  @apply rounded-xl border border-slate-200 bg-white p-6 shadow-soft transition hover:shadow-lg;
}
.card h3 {
  @apply mt-3 text-lg font-semibold text-slate-900;
}
.card p {
  @apply mt-1 text-slate-600;
}
.card-icon {
  @apply inline-flex h-10 w-10 items-center justify-center rounded-lg bg-brand-100 text-brand-700;
}
.feature-list {
  @apply mt-4 list-disc space-y-1 pl-5 text-sm text-slate-600;
}
.product-tag {
  @apply inline-flex rounded-full bg-slate-100 px-2.5 py-0.5 text-xs font-medium text-slate-700 ring-1 ring-slate-200;
}
</style>
