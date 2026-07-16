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

    <ResumeCollapsibleSection id="general" :title="$t('resume.general')">
      <div class="grid gap-10 lg:grid-cols-2 lg:gap-12">
        <div>
          <h3 class="text-xs font-semibold uppercase tracking-wider text-slate-500">
            {{ $t('resume.educationLabel') }}
          </h3>
          <ol class="mt-4 space-y-6">
            <li
              v-for="item in resumeEducation"
              :key="item.id"
              class="grid gap-2 sm:grid-cols-[minmax(0,7rem)_minmax(0,1fr)] sm:gap-4"
            >
              <div class="text-sm text-slate-500 sm:pt-1">
                <time>{{ formatEducationPeriod(item) }}</time>
              </div>
              <article>
                <h4 class="text-lg font-semibold text-slate-900">
                  {{ $t(`resume.educationItems.${item.i18nKey}.degree`) }}
                </h4>
                <p class="mt-1 text-slate-600">
                  <a
                    v-if="item.url"
                    :href="item.url"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="hover:text-brand-800"
                  >
                    {{ $t(`resume.educationItems.${item.i18nKey}.school`) }}
                  </a>
                  <span v-else>{{ $t(`resume.educationItems.${item.i18nKey}.school`) }}</span>
                </p>
              </article>
            </li>
          </ol>
        </div>

        <div>
          <h3 class="text-xs font-semibold uppercase tracking-wider text-slate-500">
            {{ $t('resume.languagesLabel') }}
          </h3>
          <ul class="mt-4 space-y-4">
            <li v-for="lang in resumeLanguages" :key="lang.id">
              <LanguageLevelRow
                :flag="lang.flag"
                :name="$t(`resume.languages.${lang.i18nKey}`)"
                :level="lang.level"
              />
            </li>
          </ul>
        </div>
      </div>
    </ResumeCollapsibleSection>

    <ResumeCollapsibleSection
      id="experience"
      :title="$t('resume.experience')"
      class="border-t border-slate-200"
    >
      <ol class="space-y-10">
        <li
          v-for="company in resumeCompanies"
          :key="company.id"
          class="grid gap-6 border-t border-slate-200 pt-10 first:border-t-0 first:pt-0 lg:grid-cols-[minmax(0,14rem)_minmax(0,1fr)]"
        >
          <div class="text-sm text-slate-500 lg:pt-1">
            <time>{{ formatCompanyPeriod(company) }}</time>
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

            <div v-if="companyHighlights(company.i18nKey).length" class="mt-5">
              <h4 class="text-xs font-semibold uppercase tracking-wider text-slate-500">
                {{ $t('resume.highlightsLabel') }}
              </h4>
              <ul class="mt-2.5 space-y-2.5">
                <li
                  v-for="(highlight, index) in companyHighlights(company.i18nKey)"
                  :key="`h-${index}`"
                  class="flex items-start gap-2.5 text-slate-700"
                >
                  <span
                    class="mt-1.5 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-brand-500"
                    aria-hidden="true"
                  ></span>
                  <span>{{ highlight }}</span>
                </li>
              </ul>
            </div>

            <div v-if="companyOutcomes(company.i18nKey).length" class="mt-5">
              <h4 class="text-xs font-semibold uppercase tracking-wider text-slate-500">
                {{ $t('resume.outcomesLabel') }}
              </h4>
              <ul class="mt-2.5 space-y-2.5">
                <li
                  v-for="(outcome, index) in companyOutcomes(company.i18nKey)"
                  :key="`o-${index}`"
                  class="flex items-start gap-2.5 text-slate-700"
                >
                  <span class="outcome-check" aria-hidden="true">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="h-3 w-3"
                    >
                      <path d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span>{{ outcome }}</span>
                </li>
              </ul>
            </div>

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
    </ResumeCollapsibleSection>

    <ResumeCollapsibleSection id="tech" :title="$t('resume.techTitle')" muted>
      <p class="max-w-3xl text-slate-600">{{ $t('resume.techDescription') }}</p>
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
    </ResumeCollapsibleSection>
  </main>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { RouterLink } from 'vue-router'
import { useI18n } from 'vue-i18n'
import ResumeCollapsibleSection from '@/components/resume/ResumeCollapsibleSection.vue'
import LanguageLevelRow from '@/components/resume/LanguageLevelRow.vue'
import {
  getTechSummary,
  resumeCompanies,
  resumeEducation,
  resumeLanguages,
  type ResumeCompany,
  type ResumeEducation,
} from '@/config/resumeConfig'

const { t, locale, messages } = useI18n()

const techSummary = computed(() => getTechSummary(resumeCompanies))

type CompanyCopy = { highlights?: string[]; outcomes?: string[] }

function companyCopy(i18nKey: string): CompanyCopy {
  const localeMessages = messages.value[locale.value] as
    | { resume?: { companies?: Record<string, CompanyCopy> } }
    | undefined
  return localeMessages?.resume?.companies?.[i18nKey] ?? {}
}

function companyHighlights(i18nKey: string): string[] {
  const highlights = companyCopy(i18nKey).highlights
  return Array.isArray(highlights) ? highlights : []
}

function companyOutcomes(i18nKey: string): string[] {
  const outcomes = companyCopy(i18nKey).outcomes
  return Array.isArray(outcomes) ? outcomes : []
}

function formatDateLabel(value: string): string {
  if (/^\d{4}$/.test(value)) return value
  const [year, month] = value.split('-').map(Number)
  const date = new Date(year, month - 1, 1)
  return new Intl.DateTimeFormat(locale.value, { month: 'short', year: 'numeric' }).format(date)
}

function formatCompanyPeriod(company: ResumeCompany): string {
  const start = formatDateLabel(company.start)
  const end = company.end ? formatDateLabel(company.end) : t('resume.present')
  return `${start} – ${end}`
}

function formatEducationPeriod(item: ResumeEducation): string {
  const start = formatDateLabel(item.start)
  const end = item.end ? formatDateLabel(item.end) : t('resume.present')
  return `${start} – ${end}`
}
</script>

<style scoped>
.outcome-check {
  @apply mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-700;
}
</style>
