<template>
  <main class="container mx-auto px-4 py-16">
    <div class="mx-auto max-w-2xl">
      <h1 class="text-3xl font-bold tracking-tight text-slate-900">{{ $t('contact.title') }}</h1>
      <p class="mt-2 text-slate-600">{{ $t('contact.description') }}</p>

      <form class="mt-8 space-y-4" @submit.prevent="onSubmit">
        <div>
          <label class="block text-sm font-medium text-slate-700">{{ $t('contact.form.name') }}</label>
          <input
            v-model="form.name"
            required
            type="text"
            class="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 shadow-sm focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-200"
          />
        </div>
        <div>
          <label class="block text-sm font-medium text-slate-700">{{ $t('contact.form.email') }}</label>
          <input
            v-model="form.email"
            required
            type="email"
            class="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 shadow-sm focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-200"
          />
        </div>
        <div>
          <label class="block text-sm font-medium text-slate-700">{{ $t('contact.form.project_details') }}</label>
          <textarea
            v-model="form.details"
            rows="5"
            class="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 shadow-sm focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-200"
            :placeholder="$t('contact.form.project_details_placeholder')"
          />
        </div>
        <button type="submit" class="btn">{{ $t('buttons.send') || 'Send inquiry' }}</button>
      </form>

      <p class="mt-10 text-sm text-slate-500">
        {{ $t('contact.preferEmail') }}
        <a
          class="underline decoration-brand-400 underline-offset-2"
          :href="`mailto:${$t('contact.email')}`"
          >{{ $t('contact.email') }}</a
        >.
      </p>
    </div>
  </main>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
import { useI18n } from 'vue-i18n'

const form = reactive({ name: '', email: '', budget: '', details: '' })
const { t } = useI18n()

function onSubmit() {
  const message = t('contact.success_message', { name: form.name })
  alert(message)
}
</script>
