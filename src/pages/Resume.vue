<template>
  <main class="container mx-auto px-4 py-16">
    <div class="mx-auto max-w-4xl">
      <div class="flex items-center gap-6">
        <img
          src="https://www.unlockit.pl/images/michal-wronski.jpg"
          alt="Michal Wronski"
          class="h-28 w-28 rounded-lg object-cover shadow"
        />
        <div>
          <h1 class="text-2xl font-bold">{{ $t('resume.name') }}</h1>
          <p class="mt-1 text-sm text-slate-600">{{ $t('resume.title') }}</p>
          <div class="mt-3 flex items-center gap-3 text-sm">
            <a
              class="inline-flex items-center gap-2 text-slate-700 hover:text-slate-900"
              :href="$t('resume.linkedin')"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                class="h-4 w-4"
                fill="currentColor"
              >
                <path
                  d="M19 0h-14c-2.8 0-5 2.2-5 5v14c0 2.8 2.2 5 5 5h14c2.8 0 5-2.2 5-5v-14c0-2.8-2.2-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.2c-1 0-1.8-.8-1.8-1.8s.8-1.8 1.8-1.8 1.8.8 1.8 1.8-.8 1.8-1.8 1.8zm13.5 10.2h-3v-4.6c0-1.1 0-2.6-1.6-2.6-1.6 0-1.8 1.2-1.8 2.5v4.7h-3v-9h2.9v1.2h.1c.4-.8 1.3-1.6 2.7-1.6 2.9 0 3.4 1.9 3.4 4.4v5z"
                />
              </svg>
              <span>LinkedIn</span>
            </a>
            <a
              class="inline-flex items-center gap-2 text-slate-700 hover:text-slate-900"
              href="https://github.com/m-wrona"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                class="h-4 w-4"
                fill="currentColor"
              >
                <path
                  d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.38 7.86 10.9.58.11.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.88-1.54-3.88-1.54-.53-1.36-1.3-1.72-1.3-1.72-1.06-.73.08-.71.08-.71 1.17.08 1.79 1.2 1.79 1.2 1.04 1.78 2.73 1.27 3.4.97.11-.75.41-1.27.75-1.56-2.55-.29-5.23-1.27-5.23-5.66 0-1.25.45-2.28 1.19-3.09-.12-.29-.52-1.47.11-3.07 0 0 .97-.31 3.18 1.18.92-.26 1.9-.39 2.88-.39.98 0 1.96.13 2.88.39 2.2-1.49 3.17-1.18 3.17-1.18.63 1.6.23 2.78.11 3.07.74.81 1.19 1.84 1.19 3.09 0 4.4-2.69 5.36-5.25 5.64.42.36.79 1.07.79 2.15 0 1.55-.01 2.8-.01 3.18 0 .31.21.68.8.56C20.71 21.38 24 17.08 24 12c0-6.27-5.23-11.5-12-11.5z"
                />
              </svg>
              <span>m-wrona</span>
            </a>
          </div>
        </div>
      </div>

      <!-- Techs -->
      <section class="mt-8">
        <h2 class="text-xl font-semibold">{{ $t('resume.tech_heading') }}</h2>
        <p class="text-sm text-slate-600 mt-1">{{ $t('resume.tech_subtitle') }}</p>
        <div class="mt-4 grid grid-cols-2 sm:grid-cols-3 gap-4">
          <div
            v-for="tech in techs"
            :key="tech.id"
            class="flex items-center gap-3 rounded-lg border border-slate-200 p-3"
          >
            <div
              class="h-10 w-10 flex items-center justify-center rounded-md bg-white text-amber-500"
            >
              <component :is="tech.icon" class="h-6 w-6" />
            </div>
            <div>
              <div class="font-semibold">{{ tech.name }}</div>
              <div class="text-sm text-slate-500">{{ tech.years }} {{ $t('resume.years') }}</div>
            </div>
          </div>
        </div>
      </section>

      <!-- Companies -->
      <section class="mt-8">
        <h2 class="text-xl font-semibold">{{ $t('resume.companies_heading') }}</h2>
        <p class="text-sm text-slate-600 mt-1">{{ $t('resume.companies_subtitle') }}</p>
        <div class="mt-4 flex flex-wrap gap-4 items-center">
          <a
            v-for="c in companies"
            :key="c.id"
            :href="c.url"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex items-center gap-3 rounded-lg border border-slate-200 p-3"
          >
            <div
              class="h-10 w-10 flex items-center justify-center rounded-md bg-white text-amber-500"
            >
              <component :is="c.icon" class="h-6 w-6" />
            </div>
            <div class="text-sm font-medium">{{ c.name }}</div>
          </a>
        </div>
      </section>

      <!-- Projects timeline -->
      <section class="mt-8">
        <h2 class="text-xl font-semibold">{{ $t('resume.projects_heading') }}</h2>
        <p class="text-sm text-slate-600 mt-1">{{ $t('resume.projects_subtitle') }}</p>

        <div class="mt-6 space-y-6">
          <div v-for="proj in projects" :key="proj.id" class="border-l-2 border-slate-200 pl-4">
            <div class="flex items-baseline justify-between">
              <div>
                <div class="text-lg font-semibold">{{ proj.title }}</div>
                <div class="text-sm text-slate-600">{{ proj.tech.join(' • ') }}</div>
              </div>
              <div class="text-sm text-slate-500">{{ proj.dates }}</div>
            </div>
            <p class="mt-2 text-slate-700">{{ proj.description }}</p>
            <div class="mt-3 flex flex-wrap gap-2">
              <span
                v-for="(r, idx) in proj.responsibilities"
                :key="idx"
                class="text-sm bg-slate-100 px-3 py-1 rounded-full"
                >{{ r }}</span
              >
            </div>
          </div>
        </div>
      </section>
    </div>
  </main>
</template>

<script setup lang="ts">
import { ref, h } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

// Tech icons as inline components
const IconVue = {
  render() {
    return h(
      'svg',
      { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 261 226', fill: 'currentColor' },
      [
        h('path', { d: 'M0 0h261v226H0z', fill: 'none' }),
        h('path', {
          d: 'M130.5 0l-65 112.5L0 0h65L130.5 112.5 196 0h65L196 112.5z',
          fill: 'currentColor',
        }),
      ],
    )
  },
}
const IconTS = {
  render() {
    return h(
      'svg',
      { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', fill: 'currentColor' },
      [
        h('rect', { x: '2', y: '2', width: '20', height: '20', rx: '2' }),
        h('path', { d: 'M7 6h10v2H9v8H7V6z', fill: '#fff' }),
      ],
    )
  },
}
const IconTailwind = {
  render() {
    return h(
      'svg',
      { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', fill: 'currentColor' },
      [
        h('path', {
          d: 'M12 5C9.8 5 8 6.5 7 8c3 0 3.8-2 5-2 1.3 0 2.3 1 3.8 1.6 1.5.6 2.6-.2 3.2 0-1.1-2.4-3.7-4-8-4z',
        }),
      ],
    )
  },
}
const IconAccessibility = {
  render() {
    return h(
      'svg',
      { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', fill: 'currentColor' },
      [h('path', { d: 'M12 2a2 2 0 110 4 2 2 0 010-4zM7 8h10l-1 9H8L7 8z' })],
    )
  },
}
const IconPerformance = {
  render() {
    return h(
      'svg',
      { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', fill: 'currentColor' },
      [h('path', { d: 'M12 3a9 9 0 100 18 9 9 0 000-18zm1 10l4-4' })],
    )
  },
}
const IconDesign = {
  render() {
    return h(
      'svg',
      { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', fill: 'currentColor' },
      [h('path', { d: 'M3 3h18v4H3zM3 9h18v12H3z' })],
    )
  },
}

const Tech = (id: string, name: string, years: string, icon: any) => ({ id, name, years, icon })

const techs = ref([
  Tech('vue', 'Vue.js', '8+', IconVue),
  Tech('ts', 'TypeScript', '6+', IconTS),
  Tech('tailwind', 'Tailwind CSS', '5+', IconTailwind),
  Tech('a11y', 'Accessibility', '6+', IconAccessibility),
  Tech('perf', 'Performance', '6+', IconPerformance),
  Tech('design', 'Design Systems', '5+', IconDesign),
])

const companies = ref([
  { id: 'big', name: 'BigMikeSolutions', url: '/', icon: IconDesign },
  { id: 'unlock', name: 'UnlockIT', url: 'https://www.unlockit.pl/', icon: IconAccessibility },
  { id: 'github', name: 'GitHub', url: 'https://github.com/m-wrona', icon: IconTS },
  { id: 'past', name: 'Past Company', url: '#', icon: IconTailwind },
])

const projects = ref([
  {
    id: 'proj1',
    title: 'Marketing Platform Revamp',
    dates: '2023',
    tech: ['Vue.js', 'TypeScript', 'Tailwind', 'Supabase'],
    description:
      'Led frontend rebuild of a marketing platform improving performance and accessibility.',
    responsibilities: ['Frontend architecture', 'Performance tuning', 'Accessibility audits'],
  },
  {
    id: 'proj2',
    title: 'E‑learning Platform',
    dates: '2021 – 2022',
    tech: ['Vue.js', 'Nuxt', 'Tailwind', 'Stripe'],
    description: 'Built an e‑learning platform with secure payments and course management.',
    responsibilities: ['Feature development', 'Payments integration', 'Testing & CI'],
  },
  {
    id: 'proj3',
    title: 'Design System & Component Library',
    dates: '2019 – 2021',
    tech: ['Vue.js', 'Storybook', 'TypeScript'],
    description: 'Created a design system used across multiple products to ensure consistency.',
    responsibilities: ['Design tokens', 'Component library', 'Documentation'],
  },
])
</script>

<style scoped></style>
