<script setup lang="ts">
import { computed, inject, ref } from 'vue'
import { resumePrintModeKey } from '@/composables/useResumePrint'
import ResumeSectionToggle from '@/components/resume/ResumeSectionToggle.vue'

const props = withDefaults(
  defineProps<{
    id: string
    title: string
    /** Start expanded */
    defaultOpen?: boolean
    muted?: boolean
  }>(),
  {
    defaultOpen: true,
    muted: false,
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
  <section
    :id="id"
    class="scroll-mt-24"
    :class="muted ? 'border-t border-slate-200 bg-slate-50' : ''"
  >
    <div class="container mx-auto px-4 py-14 print:px-0 print:py-6">
      <button
        type="button"
        class="group flex w-full items-center justify-between gap-4 text-left transition print:pointer-events-none"
        :class="
          isOpen
            ? 'py-1'
            : 'rounded-xl border border-dashed border-brand-300 bg-brand-50/70 px-4 py-3 hover:border-brand-400 hover:bg-brand-50 sm:px-5 sm:py-4'
        "
        :aria-expanded="isOpen"
        :aria-controls="`${id}-panel`"
        @click="toggle"
      >
        <h2
          class="text-2xl font-bold tracking-tight sm:text-3xl"
          :class="isOpen ? 'text-slate-900' : 'text-brand-900'"
        >
          {{ title }}
        </h2>
        <ResumeSectionToggle :is-open="isOpen" size="lg" />
      </button>

      <div v-show="isOpen" :id="`${id}-panel`" class="mt-8 print:mt-4">
        <slot />
      </div>
    </div>
  </section>
</template>
