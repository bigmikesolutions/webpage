<script setup lang="ts">
import { computed, inject, ref } from 'vue'
import { resumePrintModeKey } from '@/composables/useResumePrint'

const props = withDefaults(
  defineProps<{
    title: string
    defaultOpen?: boolean
  }>(),
  {
    defaultOpen: true,
  },
)

const open = ref(props.defaultOpen)
const printMode = inject(resumePrintModeKey, ref(false))
const isOpen = computed(() => open.value || printMode.value)

function toggle() {
  open.value = !open.value
}
</script>

<template>
  <div>
    <button
      type="button"
      class="flex w-full items-center justify-between gap-4 text-left print:pointer-events-none"
      :aria-expanded="isOpen"
      @click="toggle"
    >
      <h3 class="text-lg font-semibold text-slate-900">{{ title }}</h3>
      <span
        class="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-md border border-slate-200 bg-white text-slate-600 shadow-sm print:hidden"
        aria-hidden="true"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="h-4 w-4 transition-transform duration-200"
          :class="isOpen ? 'rotate-180' : ''"
        >
          <path d="m6 9 6 6 6-6" />
        </svg>
      </span>
    </button>

    <div v-show="isOpen" class="mt-4 print:mt-2">
      <slot />
    </div>
  </div>
</template>
