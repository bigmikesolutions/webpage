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
          <h1 class="mt-4 text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
            {{ $t('about.heading') }}
          </h1>
          <p class="mt-4 text-lg text-slate-700">{{ $t('about.pitch') }}</p>
          <div class="mt-8 flex flex-wrap items-center gap-3">
            <RouterLink to="/contact" class="btn">Work with me</RouterLink>
            <RouterLink to="/#services" class="btn btn--ghost">View services</RouterLink>
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
              <span>GitHub</span>
            </a>
          </div>
          <dl class="mt-10 grid grid-cols-3 gap-6 text-center md:max-w-md">
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
        <div class="mt-10 md:mt-0">
          <div
            class="relative mx-auto aspect-square max-w-sm rounded-2xl bg-gradient-to-tr from-brand-400 to-brand-200 p-1 shadow-soft"
          >
            <div class="h-full w-full rounded-2xl bg-white p-1">
              <div class="overflow-hidden rounded-xl h-full">
                <img
                  src="https://www.unlockit.pl/images/michal-wronski.jpg"
                  alt="Big Mike"
                  class="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
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
        <RouterLink to="/contact" class="hidden md:inline-flex btn btn--ghost">{{
          $t('cta.button')
        }}</RouterLink>
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
      <div class="mt-12">
        <h3 class="text-xl font-semibold text-slate-900">{{ $t('products.title') }}</h3>
        <p class="mt-2 text-slate-600">{{ $t('products.description') }}</p>
        <div class="mt-6 grid gap-4 sm:grid-cols-2">
          <a
            class="card flex items-center gap-4"
            href="https://www.youtube.com/@big-mike-labs"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div
              class="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-red-100 text-red-600"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                class="h-6 w-6"
              >
                <path d="M10 15l5-3-5-3v6z" />
              </svg>
            </div>
            <div>
              <h4 class="font-semibold">{{ $t('products.youtube_title') }}</h4>
              <p class="mt-1 text-sm text-slate-600">
                {{ $t('products.youtube_description') }}
              </p>
            </div>
          </a>

          <a
            class="card flex items-center gap-4"
            href="https://www.unlockit.pl/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div
              class="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-amber-100 text-amber-600"
              aria-hidden="true"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                class="h-6 w-6"
              >
                <path d="M7 10V7a5 5 0 0110 0v1h-2V7a3 3 0 00-6 0v3H7z" />
                <path
                  d="M5 11h14a1 1 0 011 1v7a1 1 0 01-1 1H5a1 1 0 01-1-1v-7a1 1 0 011-1zm7 3a2 2 0 100 4 2 2 0 000-4z"
                />
              </svg>
            </div>
            <div>
              <h4 class="font-semibold">{{ $t('products.unlock_title') }}</h4>
              <p class="mt-1 text-sm text-slate-600">
                {{ $t('products.unlock_description') }}
              </p>
            </div>
          </a>
        </div>
      </div>
    </section>

    <!-- News / Latest Videos -->
    <section class="container mx-auto px-4 py-16">
      <div>
        <h2 class="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
          {{ $t('news.title') }}
        </h2>
        <p class="mt-2 max-w-2xl text-slate-600">{{ $t('news.description') }}</p>
      </div>
      
      <div class="mt-8 grid gap-12 md:grid-cols-2">
        <div class="flex flex-col gap-4">
          <div class="relative aspect-video w-full overflow-hidden rounded-xl shadow-soft">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/SOOdUbEYkKw"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
              class="border-0"
            ></iframe>
          </div>
        </div>

        <div class="flex flex-col gap-4">
          <div class="relative aspect-video w-full overflow-hidden rounded-xl shadow-soft">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/zyOrLgHEE6I?start=0"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
              class="border-0"
            ></iframe>
          </div>
        </div>

        <div class="flex flex-col gap-4">
          <div class="relative aspect-video w-full overflow-hidden rounded-xl shadow-soft">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/-ffKVQzri-s"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
              class="border-0"
            ></iframe>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="container mx-auto px-4 pb-20">
      <div class="relative overflow-hidden rounded-2xl bg-slate-900 p-8 md:p-12">
        <div
          class="absolute inset-0 bg-[radial-gradient(60%_60%_at_100%_0%,theme(colors.brand.500/.25),transparent_60%)]"
        ></div>
        <div class="relative">
          <h3 class="text-2xl font-bold text-white">{{ $t('cta.title') }}</h3>
          <p class="mt-2 max-w-2xl text-slate-300">{{ $t('cta.subtitle') }}</p>
          <RouterLink to="/contact" class="btn mt-6">{{ $t('cta.button') }}</RouterLink>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { RouterLink } from 'vue-router'

const { tm } = useI18n()

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
</style>
