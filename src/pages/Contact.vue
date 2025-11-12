<template>
  <main class="container mx-auto px-4 py-16">
    <div class="mx-auto max-w-2xl">
      <h1 class="text-3xl font-bold tracking-tight text-slate-900">{{ $t('contact.title') }}</h1>
      <p class="mt-2 text-slate-600">{{ $t('contact.description') }}</p>

      <form class="mt-8 space-y-4" @submit.prevent="onSubmit">
        <div>
          <label class="block text-sm font-medium text-slate-700">Name</label>
          <input
            v-model="form.name"
            required
            type="text"
            class="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 shadow-sm focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-200"
          />
        </div>
        <div>
          <label class="block text-sm font-medium text-slate-700">Email</label>
          <input
            v-model="form.email"
            required
            type="email"
            class="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 shadow-sm focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-200"
          />
        </div>
        <div>
          <label class="block text-sm font-medium text-slate-700">Budget</label>
          <select
            v-model="form.budget"
            class="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 shadow-sm focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-200"
          >
            <option value="">Select…</option>
            <option>Under $5k</option>
            <option>$5k – $15k</option>
            <option>$15k – $50k</option>
            <option>$50k+</option>
          </select>
        </div>
        <div>
          <label class="block text-sm font-medium text-slate-700">Project details</label>
          <textarea
            v-model="form.details"
            rows="5"
            class="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 shadow-sm focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-200"
            placeholder="What are we building?"
          />
        </div>
        <button type="submit" class="btn">{{ $t('buttons.send') || 'Send inquiry' }}</button>
      </form>

      <p class="mt-10 text-sm text-slate-500">
        {{ $t('contact.preferEmail') }}
        <a
          class="underline decoration-brand-400 underline-offset-2"
          href="mailto:hello@bigmikesolutions.com"
          >hello@bigmikesolutions.com</a
        >.
      </p>
    </div>
  </main>
</template>

<script setup lang="ts">
import { reactive } from 'vue'

const form = reactive({ name: '', email: '', budget: '', details: '' })

function onSubmit() {
  alert(`Thanks ${form.name}! Your inquiry has been received.`)
}
</script>
