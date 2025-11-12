<template>
  <header class="sticky top-0 z-40 w-full backdrop-blur supports-[backdrop-filter]:bg-white/70 border-b border-slate-200/60">
    <div class="container mx-auto flex h-16 items-center justify-between px-4">
      <RouterLink to="/" class="flex items-center gap-2">
        <span class="inline-flex h-8 w-8 items-center justify-center rounded-md bg-brand-500 text-slate-900 shadow">
          <span class="text-sm font-semibold leading-none">BMS</span>
        </span>
        <span class="text-base font-semibold tracking-tight">BigMikeSolutions</span>
      </RouterLink>

      <nav class="hidden md:flex items-center gap-6 text-sm">
        <RouterLink to="/" class="nav-link">About</RouterLink>
        <RouterLink to="/#services" class="nav-link">Services</RouterLink>
        <RouterLink to="/contact" class="btn btn--sm">Contact</RouterLink>
      </nav>

      <button class="md:hidden inline-flex h-9 w-9 items-center justify-center rounded-md border border-slate-200 bg-white shadow-sm" @click="open = !open" aria-label="Toggle Menu">
        <svg v-if="!open" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-5 w-5">
          <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
        </svg>
        <svg v-else xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-5 w-5">
          <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>

    <transition name="fade">
      <div v-if="open" class="md:hidden border-t border-slate-200/60 bg-white">
        <div class="container mx-auto px-4 py-3 flex flex-col gap-3">
          <RouterLink to="/" class="nav-link" @click="open = false">About</RouterLink>
          <RouterLink to="/#services" class="nav-link" @click="open = false">Services</RouterLink>
          <RouterLink to="/contact" class="btn btn--sm" @click="open = false">Contact</RouterLink>
        </div>
      </div>
    </transition>
  </header>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { RouterLink } from 'vue-router'

const open = ref(false)
</script>

<style scoped>
.nav-link { @apply text-slate-700 hover:text-slate-900 transition-colors; }
.fade-enter-active, .fade-leave-active { transition: opacity .15s; }
.fade-enter-from, .fade-leave-to { opacity: 0; }
</style>
