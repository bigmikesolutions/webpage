<script setup lang="ts">
import { computed, inject, ref } from 'vue'
import { resumePrintModeKey } from '@/composables/useResumePrint'
import ResumeSectionToggle from '@/components/resume/ResumeSectionToggle.vue'

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
      class="flex w-full items-center justify-between gap-4 text-left transition print:pointer-events-none"
      :class="
        isOpen
          ? 'py-1'
          : 'rounded-lg border border-dashed border-brand-300 bg-brand-50/70 px-3 py-2.5 hover:border-brand-400 hover:bg-brand-50'
      "
      :aria-expanded="isOpen"
      @click="toggle"
    >
      <h3 class="text-lg font-semibold" :class="isOpen ? 'text-slate-900' : 'text-brand-900'">
        {{ title }}
      </h3>
      <ResumeSectionToggle :is-open="isOpen" size="sm" />
    </button>

    <div v-show="isOpen" class="mt-4 print:mt-2">
      <slot />
    </div>
  </div>
</template>
