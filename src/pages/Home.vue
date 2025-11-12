<template>
  <main>
    <!-- Hero / About -->
    <section class="relative overflow-hidden bg-gradient-to-b from-brand-100 via-brand-50 to-white">
      <div class="absolute inset-x-0 -top-24 -z-10 h-56 bg-[radial-gradient(50%_50%_at_50%_0%,theme(colors.brand.300/.45),transparent_70%)]"></div>
      <div class="container mx-auto grid px-4 py-20 md:grid-cols-2 md:items-center md:gap-12">
        <div>
          <span class="inline-flex items-center gap-2 rounded-full bg-brand-200/70 px-3 py-1 text-xs font-medium text-slate-900 ring-1 ring-brand-300/60">About Me</span>
          <h1 class="mt-4 text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">I design and build polished apps that convert.</h1>
          <p class="mt-4 text-lg text-slate-700">I'm a senior frontend engineer and product designer specializing in fast, accessible, and elegant web experiences. From strategy and UX to modern frontend stacks, I partner with clients to ship with quality and speed.</p>
          <div class="mt-8 flex flex-wrap items-center gap-3">
            <RouterLink to="/contact" class="btn">Work with me</RouterLink>
            <RouterLink to="/#services" class="btn btn--ghost">View services</RouterLink>
          </div>
          <dl class="mt-10 grid grid-cols-3 gap-6 text-center md:max-w-md">
            <div class="stat">
              <dt>Projects</dt>
              <dd>120+</dd>
            </div>
            <div class="stat">
              <dt>Avg. uplift</dt>
              <dd>32%</dd>
            </div>
            <div class="stat">
              <dt>Years</dt>
              <dd>8</dd>
            </div>
          </dl>
        </div>
        <div class="mt-10 md:mt-0">
          <div class="relative mx-auto aspect-square max-w-sm rounded-2xl bg-gradient-to-tr from-brand-400 to-brand-200 p-1 shadow-soft">
            <div class="h-full w-full rounded-2xl bg-white p-1">
              <div class="overflow-hidden rounded-xl h-full">
                <img src="https://www.unlockit.pl/images/michal-wronski.jpg" alt="Big Mike" class="h-full w-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Services -->
    <section id="services" class="container mx-auto px-4 py-16">
      <div class="flex items-end justify-between">
        <div>
          <h2 class="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">Services</h2>
          <p class="mt-2 max-w-2xl text-slate-600">Full-service product design and modern frontend engineering, inspired by the clarity and polish of Builder.io.</p>
        </div>
        <RouterLink to="/contact" class="hidden md:inline-flex btn btn--ghost">Get a quote</RouterLink>
      </div>
      <div class="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <article class="card">
          <div class="card-icon">
            <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='currentColor' class='h-6 w-6'><path d='M3 4.5A1.5 1.5 0 0 1 4.5 3h4.757a1.5 1.5 0 0 1 1.06.44l1.243 1.243c.28.28.662.439 1.06.439H19.5A1.5 1.5 0 0 1 21 6.622v12.878A1.5 1.5 0 0 1 19.5 21h-15A1.5 1.5 0 0 1 3 19.5z'/></svg>
          </div>
          <h3>Product UI/UX</h3>
          <p>Research, flows, wireframes, and high-fidelity design systems that scale.</p>
          <ul class="feature-list">
            <li>Design systems</li>
            <li>Prototyping</li>
            <li>Usability testing</li>
          </ul>
        </article>
        <article class="card">
          <div class="card-icon">
            <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='currentColor' class='h-6 w-6'><path d='M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v7.5A2.25 2.25 0 0 0 5.25 18h8.25m0-12H18a3 3 0 0 1 3 3v9m-7.5-12v12m0 0H5.25'/></svg>
          </div>
          <h3>Frontend Engineering</h3>
          <p>Vue, TypeScript, and Tailwind engineering with clean, accessible code.</p>
          <ul class="feature-list">
            <li>SPA & SSR</li>
            <li>Animations</li>
            <li>Testing</li>
          </ul>
        </article>
        <article class="card">
          <div class="card-icon">
            <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='currentColor' class='h-6 w-6'><path d='M4.5 6.75h15m-15 3.75h15m-15 3.75h15M4.5 18h15'/></svg>
          </div>
          <h3>Performance & SEO</h3>
          <p>Core Web Vitals, accessibility audits, and pragmatic performance wins.</p>
          <ul class="feature-list">
            <li>PageSpeed 90+ targets</li>
            <li>Accessibility AA</li>
            <li>Analytics setup</li>
          </ul>
        </article>
        <article class="card">
          <div class="card-icon">
            <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='currentColor' class='h-6 w-6'><path d='M12 3v18m9-9H3'/></svg>
          </div>
          <h3>Integrations</h3>
          <p>Supabase, Stripe, Sentry, and Zapier workflows wired end-to-end.</p>
          <ul class="feature-list">
            <li>Auth & DB</li>
            <li>Payments</li>
            <li>Monitoring</li>
          </ul>
        </article>
        <article class="card">
          <div class="card-icon">
            <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='currentColor' class='h-6 w-6'><path d='M16.5 7.125V3.75m0 0h3.375M16.5 3.75l3.75 3.75M7.5 16.875v3.375m0 0H4.125M7.5 20.25l-3.75-3.75M3 12h18'/></svg>
          </div>
          <h3>Brand & Visual</h3>
          <p>Expressive visual systems, iconography, and on-brand microcopy.</p>
          <ul class="feature-list">
            <li>Identity</li>
            <li>Illustrations</li>
            <li>Motion</li>
          </ul>
        </article>
        <article class="card">
          <div class="card-icon">
            <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='currentColor' class='h-6 w-6'><path d='M12 1.5 3 6v6c0 6.075 4.925 9.75 9 10.5 4.075-.75 9-4.425 9-10.5V6l-9-4.5Z'/></svg>
          </div>
          <h3>Ongoing Support</h3>
          <p>Roadmaps, maintenance, and quick iterations that keep you ahead.</p>
          <ul class="feature-list">
            <li>Retainers</li>
            <li>Backlog grooming</li>
            <li>Roadmapping</li>
          </ul>
        </article>
      </div>

      <!-- Products -->
      <div class="mt-12">
        <h3 class="text-xl font-semibold text-slate-900">Products</h3>
        <p class="mt-2 text-slate-600">Places where I share content and teach — resources and platforms I maintain.</p>
        <div class="mt-6 grid gap-4 sm:grid-cols-2">
          <a class="card flex items-center gap-4" href="https://www.youtube.com/@big-mike-labs" target="_blank" rel="noopener noreferrer">
            <div class="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-red-100 text-red-600">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="h-6 w-6"><path d="M10 15l5-3-5-3v6z"/></svg>
            </div>
            <div>
              <h4 class="font-semibold">Big Mike Labs — YouTube</h4>
              <p class="mt-1 text-sm text-slate-600">Subscribe for tutorials, breakdowns, and project walkthroughs.</p>
            </div>
          </a>

          <a class="card flex items-center gap-4" href="https://www.unlockit.pl/" target="_blank" rel="noopener noreferrer">
            <div class="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-amber-100 text-amber-600">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="h-6 w-6"><path d="M12 2L4 6v6c0 5 3.8 9.6 8 10 4.2-.4 8-5 8-10V6l-8-4z"/></svg>
            </div>
            <div>
              <h4 class="font-semibold">UnlockIT — E‑learning</h4>
              <p class="mt-1 text-sm text-slate-600">My e-learning platform with courses, workshops, and premium content.</p>
            </div>
          </a>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="container mx-auto px-4 pb-20">
      <div class="relative overflow-hidden rounded-2xl bg-slate-900 p-8 md:p-12">
        <div class="absolute inset-0 bg-[radial-gradient(60%_60%_at_100%_0%,theme(colors.brand.500/.25),transparent_60%)]"></div>
        <div class="relative">
          <h3 class="text-2xl font-bold text-white">Have a project? Let's make it shine.</h3>
          <p class="mt-2 max-w-2xl text-slate-300">From MVPs to mature products, I partner with teams to deliver results with clarity and craft.</p>
          <RouterLink to="/contact" class="btn mt-6">Start a project</RouterLink>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<style scoped>
.stat dt { @apply text-xs text-slate-600; }
.stat dd { @apply mt-1 text-xl font-semibold text-slate-900; }
.card { @apply rounded-xl border border-slate-200 bg-white p-6 shadow-soft transition hover:shadow-lg; }
.card h3 { @apply mt-3 text-lg font-semibold text-slate-900; }
.card p { @apply mt-1 text-slate-600; }
.card-icon { @apply inline-flex h-10 w-10 items-center justify-center rounded-lg bg-brand-100 text-brand-700; }
.feature-list { @apply mt-4 list-disc space-y-1 pl-5 text-sm text-slate-600; }
</style>
