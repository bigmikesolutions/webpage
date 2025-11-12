<template>
  <footer class="border-t border-slate-200/60 bg-white">
    <div class="container mx-auto px-4 py-10 grid gap-8 md:grid-cols-3">
      <div>
        <div class="flex items-center gap-2">
          <span
            class="inline-flex h-8 w-8 items-center justify-center rounded-md bg-brand-500 text-slate-900 shadow"
          >
            <span class="text-sm font-semibold leading-none">BMS</span>
          </span>
          <span class="text-base font-semibold tracking-tight">BigMikeSolutions</span>
        </div>
        <p class="mt-3 text-sm text-slate-600 max-w-sm">
          Independent designer and frontend engineer crafting fast, delightful web experiences with
          a bold yellow flair.
        </p>
      </div>
      <div>
        <h4 class="font-semibold text-slate-900">Explore</h4>
        <ul class="mt-3 space-y-2 text-sm">
          <li><RouterLink to="/" class="hover:text-slate-900 text-slate-700">About</RouterLink></li>
          <li>
            <RouterLink to="/#services" class="hover:text-slate-900 text-slate-700"
              >Services</RouterLink
            >
          </li>
          <li>
            <RouterLink to="/contact" class="hover:text-slate-900 text-slate-700"
              >Contact</RouterLink
            >
          </li>
          <li>
            <a
              href="https://github.com/bigmikesolutions"
              target="_blank"
              rel="noopener noreferrer"
              class="hover:text-slate-900 text-slate-700"
              >GitHub</a
            >
          </li>
        </ul>
      </div>
      <div>
        <h4 class="font-semibold text-slate-900">Contact</h4>
        <p class="mt-3 text-sm text-slate-700">
          Available for freelance and long-term engagements.
        </p>
        <RouterLink to="/contact" class="btn mt-4">Start a project</RouterLink>
      </div>
    </div>
    <div class="border-t border-slate-200/60 py-4 text-center text-xs text-slate-500">
      © {{ new Date().getFullYear() }} BigMikeSolutions. All rights reserved.
    </div>
  </footer>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>
