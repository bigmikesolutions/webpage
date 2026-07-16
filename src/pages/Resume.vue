<template>
  <main>
    <section class="relative overflow-hidden bg-gradient-to-b from-brand-100 via-brand-50 to-white">
      <div
        class="absolute inset-x-0 -top-24 -z-10 h-56 bg-[radial-gradient(50%_50%_at_50%_0%,theme(colors.brand.300/.45),transparent_70%)]"
      ></div>
      <div class="container mx-auto px-4 py-14 md:py-16">
        <RouterLink to="/" class="text-sm text-slate-600 hover:text-slate-900">
          ← {{ $t('resume.backHome') }}
        </RouterLink>
        <div
          class="mt-4 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between sm:gap-6"
        >
          <div class="flex min-w-0 flex-col gap-2 sm:flex-row sm:items-baseline sm:gap-4">
            <h1 class="shrink-0 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              {{ $t('resume.title') }}
            </h1>
            <p class="text-lg text-slate-700">
              {{ $t('resume.description') }}
            </p>
          </div>
          <a
            href="https://www.linkedin.com/in/michal-wronski-b389a988/"
            target="_blank"
            rel="noopener noreferrer"
            class="btn btn--ghost inline-flex shrink-0 items-center gap-2 self-start sm:self-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              class="h-4 w-4"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
              />
            </svg>
            {{ $t('resume.linkedin') }}
          </a>
        </div>
      </div>
    </section>

    <section id="experience" class="container mx-auto px-4 py-14">
      <h2 class="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
        {{ $t('resume.experience') }}
      </h2>

      <ol class="mt-10 space-y-10">
        <li
          v-for="company in resumeCompanies"
          :key="company.id"
          class="grid gap-6 border-t border-slate-200 pt-10 first:border-t-0 first:pt-0 lg:grid-cols-[minmax(0,14rem)_minmax(0,1fr)]"
        >
          <div class="text-sm text-slate-500 lg:pt-1">
            <time>{{ formatPeriod(company) }}</time>
          </div>

          <article>
            <div class="flex flex-wrap items-baseline gap-x-3 gap-y-1">
              <h3 class="text-xl font-semibold text-slate-900">
                <a
                  v-if="company.url"
                  :href="company.url"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="hover:text-brand-800"
                >
                  {{ company.name }}
                </a>
                <span v-else>{{ company.name }}</span>
              </h3>
              <p class="text-slate-600">{{ $t(`resume.companies.${company.i18nKey}.role`) }}</p>
            </div>

            <ul class="mt-4 space-y-2.5">
              <li
                v-for="(highlight, index) in companyHighlights(company.i18nKey)"
                :key="index"
                class="flex items-start gap-2.5 text-slate-700"
              >
                <span
                  class="mt-1.5 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-brand-500"
                  aria-hidden="true"
                ></span>
                <span>{{ highlight }}</span>
              </li>
            </ul>

            <div class="mt-5">
              <h4 class="text-xs font-semibold uppercase tracking-wider text-slate-500">
                {{ $t('resume.stack') }}
              </h4>
              <ul class="mt-2 flex flex-wrap gap-2">
                <li
                  v-for="tech in company.tech"
                  :key="tech"
                  class="rounded-md bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-700 ring-1 ring-slate-200"
                >
                  {{ tech }}
                </li>
              </ul>
            </div>
          </article>
        </li>
      </ol>
    </section>

    <section id="tech" class="border-t border-slate-200 bg-slate-50">
      <div class="container mx-auto px-4 py-14">
        <h2 class="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
          {{ $t('resume.techTitle') }}
        </h2>
        <p class="mt-2 max-w-3xl text-slate-600">{{ $t('resume.techDescription') }}</p>

        <ul class="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          <li
            v-for="item in techSummary"
            :key="item.name"
            class="flex items-center justify-between gap-3 rounded-lg border border-slate-200 bg-white px-4 py-3"
          >
            <span class="font-medium text-slate-900">{{ item.name }}</span>
            <span class="shrink-0 text-sm text-slate-500">
              {{ $t('resume.yearsLabel', { n: item.years }) }}
            </span>
          </li>
        </ul>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { RouterLink } from 'vue-router'
import { useI18n } from 'vue-i18n'
import {
  getTechSummary,
  resumeCompanies,
  type ResumeCompany,
} from '@/config/resumeConfig'

const { t, locale, messages } = useI18n()

const techSummary = computed(() => getTechSummary(resumeCompanies))

function companyHighlights(i18nKey: string): string[] {
  const localeMessages = messages.value[locale.value] as
    | { resume?: { companies?: Record<string, { highlights?: string[] }> } }
    | undefined
  const highlights = localeMessages?.resume?.companies?.[i18nKey]?.highlights
  return Array.isArray(highlights) ? highlights : []
}

function formatMonth(ym: string): string {
  const [year, month] = ym.split('-').map(Number)
  const date = new Date(year, month - 1, 1)
  return new Intl.DateTimeFormat(locale.value, { month: 'short', year: 'numeric' }).format(date)
}

function formatPeriod(company: ResumeCompany): string {
  const start = formatMonth(company.start)
  const end = company.end ? formatMonth(company.end) : t('resume.present')
  return `${start} – ${end}`
}
</script>
