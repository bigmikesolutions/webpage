<script setup lang="ts">
import type { LanguageFlag, LanguageLevel } from '@/config/resume/languageTypes'
import { languageLevelFilled, languageLevelTotal } from '@/config/resume/languageTypes'

const props = defineProps<{
  flag: LanguageFlag
  name: string
  level: LanguageLevel
}>()

const total = languageLevelTotal()
const filled = languageLevelFilled(props.level)
</script>

<template>
  <div class="grid grid-cols-[2.25rem_minmax(0,1fr)_2rem_auto] items-center gap-x-3 sm:gap-x-4">
    <span
      class="inline-flex h-9 w-9 shrink-0 items-center justify-center overflow-hidden rounded-full ring-1 ring-slate-200"
      aria-hidden="true"
    >
      <svg v-if="flag === 'pl'" viewBox="0 0 3 2" class="h-full w-full" preserveAspectRatio="none">
        <rect width="3" height="1" y="0" fill="#fff" />
        <rect width="3" height="1" y="1" fill="#dc143c" />
      </svg>
      <svg
        v-else-if="flag === 'en'"
        viewBox="0 0 60 30"
        class="h-full w-full"
        preserveAspectRatio="none"
      >
        <rect width="60" height="30" fill="#012169" />
        <path d="M0,0 60,30 M60,0 0,30" stroke="#fff" stroke-width="6" />
        <path d="M0,0 60,30 M60,0 0,30" stroke="#C8102E" stroke-width="2" />
        <path d="M30,0 v30 M0,15 h60" stroke="#fff" stroke-width="10" />
        <path d="M30,0 v30 M0,15 h60" stroke="#C8102E" stroke-width="6" />
      </svg>
      <svg
        v-else-if="flag === 'de'"
        viewBox="0 0 5 3"
        class="h-full w-full"
        preserveAspectRatio="none"
      >
        <rect width="5" height="1" y="0" fill="#000" />
        <rect width="5" height="1" y="1" fill="#D00" />
        <rect width="5" height="1" y="2" fill="#FFCE00" />
      </svg>
    </span>

    <span class="min-w-0 font-medium text-slate-900">{{ name }}</span>
    <span class="text-right text-sm font-semibold tabular-nums text-slate-600">{{ level }}</span>
    <span class="inline-flex items-center gap-1.5" role="img" :aria-label="level">
      <span
        v-for="i in total"
        :key="i"
        class="h-2 w-2 rounded-full"
        :class="i <= filled ? 'bg-brand-500' : 'bg-slate-200'"
      ></span>
    </span>
  </div>
</template>
