<script setup lang="ts">
import { useI18n } from 'vue-i18n'

withDefaults(
  defineProps<{
    isOpen: boolean
    size?: 'lg' | 'sm'
  }>(),
  {
    size: 'lg',
  },
)

const { t } = useI18n()
</script>

<template>
  <span
    class="inline-flex shrink-0 items-center gap-1.5 rounded-lg border font-semibold transition print:hidden"
    :class="[
      size === 'lg' ? 'px-3 py-2 text-sm' : 'px-2.5 py-1.5 text-xs',
      isOpen
        ? 'border-brand-600 bg-brand-600 text-white shadow-md'
        : 'border-brand-400 bg-brand-50 text-brand-800 shadow-sm ring-2 ring-brand-200/80',
    ]"
    aria-hidden="true"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2.5"
      stroke-linecap="round"
      stroke-linejoin="round"
      class="h-4 w-4 transition-transform duration-200"
      :class="isOpen ? 'rotate-180' : ''"
    >
      <path d="m6 9 6 6 6-6" />
    </svg>
    <span>{{ isOpen ? t('resume.sectionCollapse') : t('resume.sectionExpand') }}</span>
  </span>
</template>
