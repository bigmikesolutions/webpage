<template>
  <main class="container mx-auto px-4 py-16">
    <div class="mx-auto max-w-3xl">
      <div class="flex items-center gap-6">
        <img src="https://www.unlockit.pl/images/michal-wronski.jpg" alt="Michal Wronski" class="h-24 w-24 rounded-lg object-cover shadow" />
        <div>
          <h1 class="text-2xl font-bold">{{ $t('resume.name') }}</h1>
          <p class="mt-1 text-sm text-slate-600">{{ $t('resume.title') }}</p>
          <div class="mt-3 flex items-center gap-3 text-sm">
            <a class="inline-flex items-center gap-2 text-slate-700 hover:text-slate-900" :href="$t('resume.linkedin')" target="_blank" rel="noopener noreferrer">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="h-4 w-4" fill="currentColor"><path d="M19 0h-14c-2.8 0-5 2.2-5 5v14c0 2.8 2.2 5 5 5h14c2.8 0 5-2.2 5-5v-14c0-2.8-2.2-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.2c-1 0-1.8-.8-1.8-1.8s.8-1.8 1.8-1.8 1.8.8 1.8 1.8-.8 1.8-1.8 1.8zm13.5 10.2h-3v-4.6c0-1.1 0-2.6-1.6-2.6-1.6 0-1.8 1.2-1.8 2.5v4.7h-3v-9h2.9v1.2h.1c.4-.8 1.3-1.6 2.7-1.6 2.9 0 3.4 1.9 3.4 4.4v5z"/></svg>
              <span>LinkedIn</span>
            </a>
            <a class="inline-flex items-center gap-2 text-slate-700 hover:text-slate-900" href="https://github.com/m-wrona" target="_blank" rel="noopener noreferrer">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="h-4 w-4" fill="currentColor"><path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.38 7.86 10.9.58.11.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.88-1.54-3.88-1.54-.53-1.36-1.3-1.72-1.3-1.72-1.06-.73.08-.71.08-.71 1.17.08 1.79 1.2 1.79 1.2 1.04 1.78 2.73 1.27 3.4.97.11-.75.41-1.27.75-1.56-2.55-.29-5.23-1.27-5.23-5.66 0-1.25.45-2.28 1.19-3.09-.12-.29-.52-1.47.11-3.07 0 0 .97-.31 3.18 1.18.92-.26 1.9-.39 2.88-.39.98 0 1.96.13 2.88.39 2.2-1.49 3.17-1.18 3.17-1.18.63 1.6.23 2.78.11 3.07.74.81 1.19 1.84 1.19 3.09 0 4.4-2.69 5.36-5.25 5.64.42.36.79 1.07.79 2.15 0 1.55-.01 2.8-.01 3.18 0 .31.21.68.8.56C20.71 21.38 24 17.08 24 12c0-6.27-5.23-11.5-12-11.5z"/></svg>
              <span>m-wrona</span>
            </a>
          </div>
        </div>
      </div>

      <section class="mt-8">
        <h2 class="text-xl font-semibold mb-2">{{ $t('resume.summary_heading') }}</h2>
        <p class="text-slate-700">{{ $t('resume.summary') }}</p>
      </section>

      <section class="mt-6">
        <h3 class="text-lg font-semibold">{{ $t('resume.experience_heading') }}</h3>
        <ul class="mt-3 space-y-4">
          <li v-for="(r, idx) in resumeItems" :key="idx" class="border-l-2 border-slate-200 pl-4">
            <div class="flex items-baseline justify-between">
              <div>
                <div class="font-semibold">{{ r.title }}</div>
                <div class="text-sm text-slate-600">{{ r.company }}</div>
              </div>
              <div class="text-sm text-slate-500">{{ r.dates }}</div>
            </div>
            <p class="mt-2 text-slate-700">{{ r.description }}</p>
          </li>
        </ul>
      </section>

      <section class="mt-6">
        <h3 class="text-lg font-semibold">{{ $t('resume.education_heading') }}</h3>
        <ul class="mt-3 space-y-2 text-slate-700">
          <li v-for="(e, i) in education" :key="i">{{ e }}</li>
        </ul>
      </section>

      <section class="mt-6">
        <h3 class="text-lg font-semibold">{{ $t('resume.skills_heading') }}</h3>
        <div class="mt-3 flex flex-wrap gap-2">
          <span v-for="(s, i) in skills" :key="i" class="px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-sm">{{ s }}</span>
        </div>
      </section>
    </div>
  </main>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

// Simple resume content derived from profile link. Adjust any values as desired.
const resumeItems = ref([
  {
    title: t('resume.role1_title'),
    company: t('resume.role1_company'),
    dates: t('resume.role1_dates'),
    description: t('resume.role1_description'),
  },
  {
    title: t('resume.role2_title'),
    company: t('resume.role2_company'),
    dates: t('resume.role2_dates'),
    description: t('resume.role2_description'),
  },
])

const education = ref([t('resume.education_1')])
const skills = ref(["Vue.js", "TypeScript", "Tailwind CSS", "Accessibility", "Performance", "Design Systems"]) 
</script>

<style scoped>
</style>
