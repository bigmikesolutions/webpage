<template>
  <main class="container mx-auto px-4 py-16">
    <div class="mx-auto max-w-4xl">
      <div class="flex items-center gap-6">
        <img
          :src="profileImage.src"
          :alt="profileImage.alt"
          class="h-48 w-48 rounded-lg object-cover shadow"
        />
        <div class="flex-1">
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

        <!-- Big years of experience badge -->
        <div class="text-right">
          <div
            class="inline-block rounded-lg bg-amber-100 px-5 py-3 text-4xl font-extrabold text-amber-600 shadow-sm"
          >
            {{ $t('resume.total_experience_big') }}
          </div>
          <div class="text-sm text-slate-600 mt-1">{{ $t('resume.total_experience_label') }}</div>
        </div>
      </div>

      <!-- Recommendations -->
      <section class="mt-8">
        <div class="flex items-center justify-between">
          <h2 class="text-xl font-semibold">{{ $t('resume.recommendations_heading') }}</h2>
          <button @click="toggleSection('recommendations')" class="text-sm text-amber-600">
            {{ openSections.recommendations ? 'Hide' : 'Show' }}
          </button>
        </div>
        <p class="text-sm text-slate-600 mt-1">{{ $t('resume.recommendations_subtitle') }}</p>
        <div v-if="openSections.recommendations" class="mt-4 space-y-4">
          <div
            v-for="(rec, i) in recommendations"
            :key="i"
            class="rounded-lg border border-slate-200 p-4 flex gap-4"
          >
            <div class="flex-1">
              <p class="text-slate-700 italic">{{ rec.text }}</p>
              <div class="mt-3 flex items-center gap-3">
                <div>
                  <div class="font-semibold text-sm">{{ rec.name }}</div>
                  <div class="text-xs text-slate-600">{{ rec.title }}</div>
                </div>
              </div>
            </div>
            <div v-if="rec.image" class="flex-shrink-0">
              <img :src="rec.image" :alt="rec.name" class="h-20 w-20 rounded-lg object-cover" />
            </div>
          </div>
        </div>
      </section>

      <!-- Education (added before Techs) -->
      <section class="mt-8">
        <div class="flex items-center justify-between">
          <h2 class="text-xl font-semibold">{{ $t('resume.education_heading') }}</h2>
          <button @click="toggleSection('education')" class="text-sm text-amber-600">
            {{ openSections.education ? 'Hide' : 'Show' }}
          </button>
        </div>
        <p class="text-sm text-slate-600 mt-1">{{ $t('resume.education_subtitle') }}</p>
        <div v-if="openSections.education" class="mt-4 space-y-6">
          <div v-for="(e, i) in education" :key="i">
            <div class="rounded-lg border border-slate-200 p-4">
              <div class="flex items-center justify-between">
                <div>
                  <div class="font-semibold">{{ e.degree }}</div>
                  <div class="text-sm text-slate-600">{{ e.institution }}</div>
                </div>
                <div class="text-sm text-slate-500">{{ e.years }}</div>
              </div>
              <p v-if="e.details" class="mt-2 text-slate-700">{{ e.details }}</p>
            </div>

            <!-- languages boxes - outside education entry -->
            <div v-if="e.langs" class="mt-3 flex flex-wrap gap-3">
              <div
                v-for="(l, idx) in e.langs"
                :key="idx"
                class="inline-flex items-center gap-3 rounded-lg border border-slate-200 p-3"
              >
                <div
                  class="h-8 w-8 flex items-center justify-center rounded-md bg-white text-amber-500"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    class="h-5 w-5"
                  >
                    <path d="M12 2a10 10 0 100 20 10 10 0 000-20zm1 14h-2v-2h2v2zm0-4h-2V6h2v6z" />
                  </svg>
                </div>
                <div>
                  <div class="font-medium">{{ l.name }}</div>
                  <div class="text-xs text-slate-500">{{ l.level }}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Techs grouped -->
      <section class="mt-8">
        <div class="flex items-center justify-between">
          <h2 class="text-xl font-semibold">{{ $t('resume.tech_heading') }}</h2>
          <button @click="toggleSection('techs')" class="text-sm text-amber-600">
            {{ openSections.techs ? 'Hide' : 'Show' }}
          </button>
        </div>
        <p class="text-sm text-slate-600 mt-1">{{ $t('resume.tech_subtitle') }}</p>

        <div v-if="openSections.techs" class="mt-4 space-y-6">
          <div v-for="group in techGroups" :key="group.id">
            <div class="flex items-center justify-between">
              <h3 class="text-sm font-semibold text-slate-700 mb-2">{{ group.name }}</h3>
              <button @click="toggleGroup(group.id)" class="text-sm text-amber-600">
                {{ openGroups[group.id] ? 'Hide' : 'Show' }}
              </button>
            </div>
            <div v-if="openGroups[group.id]" class="grid grid-cols-2 sm:grid-cols-3 gap-4">
              <div
                v-for="tech in group.items"
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
                  <div class="text-sm text-slate-500">
                    {{ tech.years }} {{ $t('resume.years') }}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Companies -->
      <section class="mt-8">
        <div class="flex items-center justify-between">
          <h2 class="text-xl font-semibold">{{ $t('resume.companies_heading') }}</h2>
          <button @click="toggleSection('companies')" class="text-sm text-amber-600">
            {{ openSections.companies ? 'Hide' : 'Show' }}
          </button>
        </div>
        <p class="text-sm text-slate-600 mt-1">{{ $t('resume.companies_subtitle') }}</p>
        <div v-if="openSections.companies" class="mt-4 flex flex-wrap gap-4 items-center">
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
            <div>
              <div class="text-sm font-medium">{{ c.name }}</div>
              <div class="text-sm text-slate-600">{{ c.role }}</div>
              <div class="text-xs text-slate-500">{{ c.years }}</div>
            </div>
          </a>
        </div>
      </section>

      <!-- Projects timeline -->
      <section class="mt-8">
        <div class="flex items-center justify-between">
          <h2 class="text-xl font-semibold">{{ $t('resume.projects_heading') }}</h2>
          <button @click="toggleSection('projects')" class="text-sm text-amber-600">
            {{ openSections.projects ? 'Hide' : 'Show' }}
          </button>
        </div>
        <p class="text-sm text-slate-600 mt-1">{{ $t('resume.projects_subtitle') }}</p>

        <div v-if="openSections.projects" class="mt-6 space-y-6">
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

      <!-- Certificates -->
      <section class="mt-8">
        <div class="flex items-center justify-between">
          <h2 class="text-xl font-semibold">{{ $t('resume.certificates_heading') }}</h2>
          <button @click="toggleSection('certificates')" class="text-sm text-amber-600">
            {{ openSections.certificates ? 'Hide' : 'Show' }}
          </button>
        </div>
        <p class="text-sm text-slate-600 mt-1">{{ $t('resume.certificates_subtitle') }}</p>
        <div v-if="openSections.certificates" class="mt-4 grid gap-4 sm:grid-cols-2">
          <div
            v-for="cert in certificates"
            :key="cert.id"
            class="rounded-lg border border-slate-200 p-4"
          >
            <div class="flex items-baseline justify-between">
              <div>
                <div class="font-semibold">{{ cert.title }}</div>
                <div class="text-sm text-slate-600">{{ cert.issuer }}</div>
              </div>
              <div class="text-sm text-slate-500">{{ cert.year }}</div>
            </div>
            <div class="mt-2">
              <a :href="cert.url" target="_blank" rel="noopener noreferrer" class="text-amber-600"
                >View certificate</a
              >
            </div>
          </div>
        </div>
      </section>
    </div>
  </main>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
import {
  profileImage,
  techGroups,
  education,
  recommendations,
  companies,
  projects,
  certificates,
} from '@/config/resumeConfig'

const { t } = useI18n()

// collapsible groups state
const openGroups = ref<Record<string, boolean>>({})

// initialize groups open by default
techGroups.value.forEach((g: any) => (openGroups.value[g.id] = true))

function toggleGroup(id: string) {
  openGroups.value[id] = !openGroups.value[id]
}

// main sections collapse state
const openSections = ref<Record<string, boolean>>({
  recommendations: true,
  education: true,
  techs: true,
  companies: true,
  projects: true,
  certificates: true,
})

function toggleSection(id: string) {
  openSections.value[id] = !openSections.value[id]
}
</script>

<style scoped></style>
