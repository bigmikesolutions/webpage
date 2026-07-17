<template>
  <main>
    <ResumeProgressNav
      :section-label="progressSectionLabel"
      :hide-label="$t('resume.progressHide')"
      :show-label="$t('resume.progressShow')"
    />

    <section class="relative overflow-hidden bg-gradient-to-b from-brand-100 via-brand-50 to-white">
      <div
        class="absolute inset-x-0 -top-24 -z-10 h-56 bg-[radial-gradient(50%_50%_at_50%_0%,theme(colors.brand.300/.45),transparent_70%)]"
      ></div>
      <div class="container mx-auto px-4 py-14 md:py-16">
        <RouterLink to="/" class="no-print text-sm text-slate-600 hover:text-slate-900">
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
          <div class="no-print flex flex-wrap items-center gap-3 self-start sm:self-center">
            <button type="button" class="btn btn--ghost inline-flex items-center gap-2" @click="exportPdf">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="h-4 w-4"
                aria-hidden="true"
              >
                <path d="M6 9V2h12v7" />
                <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2" />
                <path d="M6 14h12v8H6z" />
              </svg>
              {{ $t('resume.exportPdf') }}
            </button>
            <a
              href="https://www.linkedin.com/in/michal-wronski-b389a988/"
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
                  d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
                />
              </svg>
              {{ $t('resume.linkedin') }}
            </a>
          </div>
        </div>
      </div>
    </section>

    <ResumeCollapsibleSection id="general" :title="$t('resume.general')">
      <div
        class="grid grid-cols-[5.5rem_minmax(0,1fr)] items-start gap-4 sm:grid-cols-[7rem_minmax(0,1fr)] sm:gap-6 lg:grid-cols-[minmax(0,11rem)_minmax(0,1fr)_minmax(0,1fr)] lg:gap-12"
      >
        <div class="w-full">
          <div
            class="relative aspect-square rounded-xl bg-gradient-to-tr from-brand-400 to-brand-200 p-0.5 shadow-soft sm:rounded-2xl sm:p-1"
          >
            <div class="h-full w-full rounded-[0.625rem] bg-white p-0.5 sm:rounded-2xl sm:p-1">
              <div class="h-full overflow-hidden rounded-lg sm:rounded-xl">
                <img
                  src="/images/michal-wronski.jpg"
                  :alt="$t('resume.photoAlt')"
                  class="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        <div class="min-w-0 lg:col-start-3 lg:row-start-1">
          <h3 class="text-xs font-semibold uppercase tracking-wider text-slate-500">
            {{ $t('resume.languagesLabel') }}
          </h3>
          <ul class="mt-3 space-y-3 sm:mt-4 sm:space-y-4">
            <li v-for="lang in resumeLanguages" :key="lang.id">
              <LanguageLevelRow
                :flag="lang.flag"
                :name="$t(`resume.languages.${lang.i18nKey}`)"
                :level="lang.level"
              />
            </li>
          </ul>
        </div>

        <div class="col-span-2 lg:col-span-1 lg:col-start-2 lg:row-start-1">
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
      </div>
    </ResumeCollapsibleSection>

    <ResumeCollapsibleSection
      id="experience"
      :title="$t('resume.experience')"
      class="border-t border-slate-200"
    >
      <ResumeItemSlider :items="resumeCompanies" desktop-class="space-y-10">
        <template #default="{ item: company, index }">
          <div :id="`company-${company.id}`" class="scroll-mt-24">
            <ResumeCompanyCard
              :company="company"
              :period="formatCompanyPeriod(company)"
              :role="$t(`resume.companies.${company.i18nKey}.role`)"
              :highlights="companyHighlights(company.i18nKey)"
              :outcomes="companyOutcomes(company.i18nKey)"
              :highlights-label="$t('resume.highlightsLabel')"
              :outcomes-label="$t('resume.outcomesLabel')"
              :stack-label="$t('resume.stack')"
              :group-label="techGroupLabel"
              :divided="index > 0"
            />
          </div>
        </template>
      </ResumeItemSlider>
    </ResumeCollapsibleSection>

    <ResumeCollapsibleSection
      id="internships"
      :title="$t('resume.internshipsTitle')"
      :default-open="false"
      class="border-t border-slate-200"
    >
      <ResumeItemSlider :items="resumeInternships" desktop-class="space-y-10">
        <template #default="{ item: internship, index }">
          <div :id="`internship-${internship.id}`" class="scroll-mt-24">
            <ResumeCompanyCard
              :company="internship"
              :period="formatCompanyPeriod(internship)"
              :role="$t(`resume.internships.${internship.i18nKey}.role`)"
              :highlights="internshipHighlights(internship.i18nKey)"
              :outcomes="internshipOutcomes(internship.i18nKey)"
              :highlights-label="$t('resume.highlightsLabel')"
              :outcomes-label="$t('resume.outcomesLabel')"
              :stack-label="$t('resume.stack')"
              :group-label="techGroupLabel"
              :divided="index > 0"
            />
          </div>
        </template>
      </ResumeItemSlider>
    </ResumeCollapsibleSection>

    <ResumeCollapsibleSection id="tech" :title="$t('resume.techTitle')" muted>
      <p class="max-w-3xl text-slate-600">{{ $t('resume.techDescription') }}</p>

      <div class="mt-8">
        <h3 class="text-lg font-semibold text-slate-900">
          {{ $t('resume.techFeaturedTitle') }}
        </h3>
        <ul class="mt-4 hidden gap-3 sm:grid sm:grid-cols-2 lg:grid-cols-3 print:grid">
          <li v-for="item in featuredTechSummary" :key="item.name">
            <TechSummaryCard
              :item="item"
              :group-label="techGroupLabel(item.group)"
              :years-label="$t('resume.techYearsTotal', { n: item.years })"
            />
          </li>
        </ul>

        <div class="mt-4 sm:hidden print:hidden">
          <ResumeItemSlider :items="featuredTechPages" desktop-class="">
            <template #default="{ item: page }">
              <ul class="grid gap-3">
                <li v-for="tech in page" :key="tech.name">
                  <TechSummaryCard
                    :item="tech"
                    :group-label="techGroupLabel(tech.group)"
                    :years-label="$t('resume.techYearsTotal', { n: tech.years })"
                  />
                </li>
              </ul>
            </template>
          </ResumeItemSlider>
        </div>
      </div>

      <ResumeCollapsibleSection
        id="tech-others"
        :title="$t('resume.techOthersTitle')"
        :default-open="false"
        class="mt-10 border-t border-slate-200"
      >
        <div class="no-print space-y-3">
          <TechGroupFilters
            v-model:selected-groups="selectedTechGroups"
            :ariaLabel="$t('resume.techFilterLabel')"
            :group-label="techGroupLabel"
          />
          <TechLevelFilters
            v-model:selected-levels="selectedTechLevels"
            :ariaLabel="$t('resume.techLevelFilterLabel')"
            :level-label="techLevelLabel"
          />
        </div>

        <p v-if="filteredOtherTechSummary.length === 0" class="mt-8 text-slate-600 no-print">
          {{ $t('resume.techEmptyFilter') }}
        </p>

        <div v-else class="mt-8">
          <ul class="hidden gap-3 sm:grid sm:grid-cols-2 lg:grid-cols-3 print:grid">
            <li v-for="item in filteredOtherTechSummary" :key="item.name">
              <TechSummaryCard
                :item="item"
                :group-label="techGroupLabel(item.group)"
                :years-label="$t('resume.techYearsTotal', { n: item.years })"
              />
            </li>
          </ul>

          <div class="sm:hidden print:hidden">
            <ResumeItemSlider :items="otherTechPages" desktop-class="">
              <template #default="{ item: page }">
                <ul class="grid gap-3">
                  <li v-for="tech in page" :key="tech.name">
                    <TechSummaryCard
                      :item="tech"
                      :group-label="techGroupLabel(tech.group)"
                      :years-label="$t('resume.techYearsTotal', { n: tech.years })"
                    />
                  </li>
                </ul>
              </template>
            </ResumeItemSlider>
          </div>
        </div>
      </ResumeCollapsibleSection>
    </ResumeCollapsibleSection>

    <ResumeCollapsibleSection
      id="publications"
      :title="$t('resume.publicationsTitle')"
      class="border-t border-slate-200"
    >
      <p class="max-w-3xl text-slate-600">{{ $t('resume.publicationsDescription') }}</p>

      <div class="mt-8 space-y-10">
        <ResumeCollapsibleSubsection
          v-for="group in resumeNewsGroups"
          :key="group.type"
          :title="$t(newsTypeHeadingKey[group.type])"
          :default-open="group.type !== 'youtube'"
        >
          <ul class="space-y-3">
            <li v-for="item in group.items" :key="item.id">
              <NewsListItem :item="item" />
            </li>
          </ul>
          <p v-if="group.hasMore" class="mt-3 text-sm text-slate-500">
            {{
              $t('resume.publicationsMore', {
                shown: group.items.length,
                total: group.total,
              })
            }}
          </p>
        </ResumeCollapsibleSubsection>
      </div>

      <div class="no-print mt-8 flex flex-wrap gap-3">
        <a
          href="https://bigmikelabs.pl"
          target="_blank"
          rel="noopener noreferrer"
          class="btn btn--ghost inline-flex items-center gap-2"
        >
          {{ $t('resume.publicationsVisitLabs') }}
        </a>
        <a
          href="https://www.youtube.com/@big-mike-labs"
          target="_blank"
          rel="noopener noreferrer"
          class="btn btn--ghost inline-flex items-center gap-2"
        >
          {{ $t('resume.publicationsVisitYoutube') }}
        </a>
      </div>
    </ResumeCollapsibleSection>
  </main>
</template>

<script setup lang="ts">
import { computed, nextTick, provide, ref } from 'vue'
import { RouterLink } from 'vue-router'
import { useI18n } from 'vue-i18n'
import ResumeCollapsibleSection from '@/components/resume/ResumeCollapsibleSection.vue'
import ResumeCollapsibleSubsection from '@/components/resume/ResumeCollapsibleSubsection.vue'
import ResumeItemSlider from '@/components/resume/ResumeItemSlider.vue'
import ResumeCompanyCard from '@/components/resume/ResumeCompanyCard.vue'
import LanguageLevelRow from '@/components/resume/LanguageLevelRow.vue'
import ResumeProgressNav from '@/components/resume/ResumeProgressNav.vue'
import TechGroupFilters from '@/components/resume/TechGroupFilters.vue'
import TechLevelFilters from '@/components/resume/TechLevelFilters.vue'
import TechSummaryCard from '@/components/resume/TechSummaryCard.vue'
import NewsListItem from '@/components/news/NewsListItem.vue'
import { createResumePrintMode, resumePrintModeKey } from '@/composables/useResumePrint'
import { createResumeSectionController, resumeSectionsKey } from '@/composables/useResumeSections'
import { featuredTechNames } from '@/config/resume/companies'
import {
  getResumeNewsGroups,
  type NewsType,
} from '@/config/newsConfig'
import {
  filterTechSummary,
  getTechSummary,
  resumeCompanies,
  resumeEducation,
  resumeInternships,
  resumeLanguages,
  techGroupOrder,
  techLevelOrder,
  type ResumeCompany,
  type ResumeEducation,
  type TechGroup,
  type TechLevel,
  type TechSummaryItem,
} from '@/config/resumeConfig'

const TECH_PAGE_SIZE = 6

const { t, locale, messages } = useI18n()

const printMode = createResumePrintMode()
const sectionController = createResumeSectionController()
provide(resumePrintModeKey, printMode)
provide(resumeSectionsKey, sectionController)

const selectedTechGroups = ref<TechGroup[]>([...techGroupOrder])
const selectedTechLevels = ref<TechLevel[]>([3])

const newsTypeHeadingKey: Record<NewsType, string> = {
  publication: 'resume.publicationsSectionMinibooks',
  article: 'resume.publicationsSectionArticles',
  youtube: 'resume.publicationsSectionYoutube',
}

const resumeNewsGroups = computed(() => getResumeNewsGroups())

const techSummary = computed(() => getTechSummary())

const featuredTechSummary = computed(() =>
  techSummary.value.filter((item) => featuredTechNames.has(item.name)),
)

const otherTechSummary = computed(() =>
  techSummary.value.filter((item) => !featuredTechNames.has(item.name)),
)

const filteredOtherTechSummary = computed(() =>
  filterTechSummary(otherTechSummary.value, selectedTechGroups.value, selectedTechLevels.value),
)

const featuredTechPages = computed(() => {
  const pages: TechSummaryItem[][] = []
  const items = featuredTechSummary.value
  for (let i = 0; i < items.length; i += TECH_PAGE_SIZE) {
    pages.push(items.slice(i, i + TECH_PAGE_SIZE))
  }
  return pages
})

const otherTechPages = computed(() => {
  const pages: TechSummaryItem[][] = []
  const items = filteredOtherTechSummary.value
  for (let i = 0; i < items.length; i += TECH_PAGE_SIZE) {
    pages.push(items.slice(i, i + TECH_PAGE_SIZE))
  }
  return pages
})

function techGroupLabel(group: TechGroup): string {
  return t(`resume.techGroups.${group}`)
}

function techLevelLabel(level: TechLevel): string {
  return t(`resume.techLevels.${level}`)
}

function progressSectionLabel(id: string): string {
  const keys: Record<string, string> = {
    nav: 'resume.progressNav',
    general: 'resume.general',
    experience: 'resume.experience',
    internships: 'resume.internshipsTitle',
    tech: 'resume.techTitle',
    publications: 'resume.publicationsTitle',
  }
  return t(keys[id] ?? id)
}

async function exportPdf() {
  const previousTitle = document.title
  const previousGroups = [...selectedTechGroups.value]
  const previousLevels = [...selectedTechLevels.value]
  let cleaned = false

  const cleanup = () => {
    if (cleaned) return
    cleaned = true
    printMode.value = false
    document.title = previousTitle
    selectedTechGroups.value = previousGroups
    selectedTechLevels.value = previousLevels
    window.removeEventListener('afterprint', cleanup)
  }

  selectedTechGroups.value = [...techGroupOrder]
  selectedTechLevels.value = [...techLevelOrder]
  printMode.value = true
  document.title = t('resume.pdfTitle')
  await nextTick()

  window.addEventListener('afterprint', cleanup)
  window.print()
  // Fallback when afterprint is delayed / missing
  window.setTimeout(cleanup, 2000)
}

type CompanyCopy = { highlights?: string[]; outcomes?: string[] }

function localeResumeBlock(
  block: 'companies' | 'internships',
  i18nKey: string,
): CompanyCopy {
  const localeMessages = messages.value[locale.value] as
    | {
        resume?: {
          companies?: Record<string, CompanyCopy>
          internships?: Record<string, CompanyCopy>
        }
      }
    | undefined
  return localeMessages?.resume?.[block]?.[i18nKey] ?? {}
}

function companyHighlights(i18nKey: string): string[] {
  const highlights = localeResumeBlock('companies', i18nKey).highlights
  return Array.isArray(highlights) ? highlights : []
}

function companyOutcomes(i18nKey: string): string[] {
  const outcomes = localeResumeBlock('companies', i18nKey).outcomes
  return Array.isArray(outcomes) ? outcomes : []
}

function internshipHighlights(i18nKey: string): string[] {
  const highlights = localeResumeBlock('internships', i18nKey).highlights
  return Array.isArray(highlights) ? highlights : []
}

function internshipOutcomes(i18nKey: string): string[] {
  const outcomes = localeResumeBlock('internships', i18nKey).outcomes
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
