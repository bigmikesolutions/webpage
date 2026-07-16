<script setup lang="ts">
import { ref } from 'vue'

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

function toggle() {
  open.value = !open.value
}
</script>

<template>
  <section
    :id="id"
    :class="muted ? 'border-t border-slate-200 bg-slate-50' : ''"
  >
    <div class="container mx-auto px-4 py-14">
      <button
        type="button"
        class="flex w-full items-center justify-between gap-4 text-left"
        :aria-expanded="open"
        :aria-controls="`${id}-panel`"
        @click="toggle"
      >
        <h2 class="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
          {{ title }}
        </h2>
        <span
          class="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-md border border-slate-200 bg-white text-slate-600 shadow-sm"
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
            :class="open ? 'rotate-180' : ''"
          >
            <path d="m6 9 6 6 6-6" />
          </svg>
        </span>
      </button>

      <div v-show="open" :id="`${id}-panel`" class="mt-8">
        <slot />
      </div>
    </div>
  </section>
</template>
