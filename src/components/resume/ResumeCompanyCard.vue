<script setup lang="ts">
import type { ResumeCompany } from '@/config/resumeConfig'

defineProps<{
  company: ResumeCompany
  period: string
  role: string
  highlights: string[]
  outcomes: string[]
  highlightsLabel: string
  outcomesLabel: string
  stackLabel: string
  /** Show top divider (desktop list between items) */
  divided?: boolean
}>()
</script>

<template>
  <div
    class="grid gap-6 lg:grid-cols-[minmax(0,14rem)_minmax(0,1fr)]"
    :class="divided ? 'border-t border-slate-200 pt-10' : ''"
  >
    <div class="text-sm text-slate-500 lg:pt-1">
      <time>{{ period }}</time>
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
        <p class="text-slate-600">{{ role }}</p>
      </div>

      <div v-if="highlights.length" class="mt-5">
        <h4 class="text-xs font-semibold uppercase tracking-wider text-slate-500">
          {{ highlightsLabel }}
        </h4>
        <ul class="mt-2.5 space-y-2.5">
          <li
            v-for="(highlight, index) in highlights"
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

      <div v-if="outcomes.length" class="mt-5">
        <h4 class="text-xs font-semibold uppercase tracking-wider text-slate-500">
          {{ outcomesLabel }}
        </h4>
        <ul class="mt-2.5 space-y-2.5">
          <li
            v-for="(outcome, index) in outcomes"
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
          {{ stackLabel }}
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
  </div>
</template>

<style scoped>
.outcome-check {
  @apply mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-700;
}
</style>
