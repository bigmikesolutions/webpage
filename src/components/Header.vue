<template>
  <header
    class="sticky top-0 z-40 w-full backdrop-blur supports-[backdrop-filter]:bg-white/70 border-b border-slate-200/60"
  >
    <div class="container mx-auto flex h-16 items-center justify-between px-4">
      <RouterLink to="/" class="flex items-center gap-2">
        <span
          class="inline-flex h-8 w-8 items-center justify-center rounded-md bg-brand-500 text-slate-900 shadow"
        >
          <span class="text-sm font-semibold leading-none">BMS</span>
        </span>
        <span class="text-base font-semibold tracking-tight">BigMikeSolutions</span>
      </RouterLink>

      <nav class="hidden md:flex items-center gap-4 text-sm">
        <RouterLink to="/" class="nav-link">{{ t('header.about') }}</RouterLink>
        <RouterLink to="/#services" class="nav-link">{{ t('header.services') }}</RouterLink>
        <RouterLink to="/resume" class="nav-link">{{ t('header.resume') }}</RouterLink>
        <a
          href="https://github.com/bigmikesolutions"
          target="_blank"
          rel="noopener noreferrer"
          class="nav-link inline-flex items-center gap-2"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            class="h-4 w-4"
            fill="currentColor"
          >
            <path
              d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.38 7.86 10.9.58.11.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.88-1.54-3.88-1.54-.53-1.36-1.3-1.72-1.3-1.72-1.06-.73.08-.71.08-.71 1.17.08 1.79 1.2 1.79 1.2 1.04 1.78 2.73 1.27 3.4.97.11-.75.41-1.27.75-1.56-2.55-.29-5.23-1.27-5.23-5.66 0-1.25.45-2.28 1.19-3.09-.12-.29-.52-1.47.11-3.07 0 0 .97-.31 3.18 1.18.92-.26 1.9-.39 2.88-.39.98 0 1.96.13 2.88.39 2.2-1.49 3.17-1.18 3.17-1.18.63 1.6.23 2.78.11 3.07.74.81 1.19 1.84 1.19 3.09 0 4.4-2.69 5.36-5.25 5.64.42.36.79 1.07.79 2.15 0 1.55-.01 2.8-.01 3.18 0 .31.21.68.8.56C20.71 21.38 24 17.08 24 12c0-6.27-5.23-11.5-12-11.5z"
            />
          </svg>
          <span>{{ t('header.github') }}</span>
        </a>
        <RouterLink to="/contact" class="btn btn--sm">{{ t('header.contact') }}</RouterLink>

        <div class="flex items-center gap-2">
          <button class="lang-btn" @click="setLocale('pl')">PL</button>
          <button class="lang-btn" @click="setLocale('en')">EN</button>
        </div>
      </nav>

      <button
        class="md:hidden inline-flex h-9 w-9 items-center justify-center rounded-md border border-slate-200 bg-white shadow-sm"
        @click="open = !open"
        aria-label="Toggle Menu"
      >
        <svg
          v-if="!open"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="h-5 w-5"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
        <svg
          v-else
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="h-5 w-5"
        >
          <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>

    <transition name="fade">
      <div v-if="open" class="md:hidden border-t border-slate-200/60 bg-white">
        <div class="container mx-auto px-4 py-3 flex flex-col gap-3">
          <RouterLink to="/" class="nav-link" @click="open = false">{{
            t('header.about')
          }}</RouterLink>
          <RouterLink to="/#services" class="nav-link" @click="open = false">{{
            t('header.services')
          }}</RouterLink>
          <a
            href="https://github.com/bigmikesolutions"
            target="_blank"
            rel="noopener noreferrer"
            class="nav-link"
            @click="open = false"
            >{{ t('header.github') }}</a
          >
          <RouterLink to="/contact" class="btn btn--sm" @click="open = false">{{
            t('header.contact')
          }}</RouterLink>
        </div>
      </div>
    </transition>
  </header>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { RouterLink } from 'vue-router'
import { useI18n } from 'vue-i18n'

const open = ref(false)
const { locale, t } = useI18n()

function setLocale(l: string) {
  locale.value = l
}
</script>

<style scoped>
.nav-link {
  @apply text-slate-700 hover:text-slate-900 transition-colors;
}
.lang-btn {
  @apply inline-flex h-8 w-8 items-center justify-center rounded-md border border-slate-200 bg-white text-sm font-medium;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.15s;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
