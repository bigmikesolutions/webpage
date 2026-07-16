<script setup lang="ts">
import type { TechLevel } from '@/config/resumeConfig'

withDefaults(
  defineProps<{
    level: TechLevel
    total?: number
  }>(),
  { total: 3 },
)
</script>

<template>
  <span class="inline-flex items-center gap-1" role="img" :aria-label="String(level)">
    <span
      v-for="i in total"
      :key="i"
      class="h-2 w-2 rounded-full"
      :class="i <= level ? 'bg-brand-500' : 'bg-slate-200'"
    ></span>
  </span>
</template>
