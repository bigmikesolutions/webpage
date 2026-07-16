<script setup lang="ts" generic="T">
import { computed, ref, watch } from 'vue'
import { useMediaQuery } from '@/composables/useMediaQuery'

const props = withDefaults(
  defineProps<{
    items: T[]
    /** Desktop layout classes for the list wrapper */
    desktopClass?: string
    /** Mobile breakpoint — slider below this width */
    breakpoint?: string
  }>(),
  {
    desktopClass: 'space-y-10',
    breakpoint: '(min-width: 768px)',
  },
)

const isDesktop = useMediaQuery(props.breakpoint)
const index = ref(0)

watch(
  () => props.items.length,
  () => {
    index.value = 0
  },
)

const total = computed(() => props.items.length)
const canPrev = computed(() => index.value > 0)
const canNext = computed(() => index.value < total.value - 1)

function prev() {
  if (canPrev.value) index.value -= 1
}

function next() {
  if (canNext.value) index.value += 1
}
</script>

<template>
  <div>
    <div
      v-if="!isDesktop && total > 1"
      class="mb-4 flex items-center justify-between gap-3"
    >
      <button
        type="button"
        class="slider-nav"
        :disabled="!canPrev"
        aria-label="Previous"
        @click="prev"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="h-4 w-4"
        >
          <path d="m15 18-6-6 6-6" />
        </svg>
      </button>

      <div class="flex items-center gap-2">
        <span class="text-sm tabular-nums text-slate-600">
          {{ index + 1 }} / {{ total }}
        </span>
        <span class="hidden xs:inline-flex items-center gap-1 sm:inline-flex">
          <button
            v-for="i in total"
            :key="i"
            type="button"
            class="h-1.5 rounded-full transition-all"
            :class="i - 1 === index ? 'w-4 bg-brand-500' : 'w-1.5 bg-slate-300'"
            :aria-label="`Go to ${i}`"
            @click="index = i - 1"
          />
        </span>
      </div>

      <button
        type="button"
        class="slider-nav"
        :disabled="!canNext"
        aria-label="Next"
        @click="next"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="h-4 w-4"
        >
          <path d="m9 18 6-6-6-6" />
        </svg>
      </button>
    </div>

    <div :class="isDesktop ? desktopClass : undefined">
      <template v-for="(item, i) in items" :key="i">
        <div v-show="isDesktop || i === index">
          <slot :item="item" :index="i" />
        </div>
      </template>
    </div>
  </div>
</template>

<style scoped>
.slider-nav {
  @apply inline-flex h-9 w-9 items-center justify-center rounded-md border border-slate-200 bg-white text-slate-700 shadow-sm transition enabled:hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-40;
}
</style>
