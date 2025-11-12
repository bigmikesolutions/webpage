<script setup lang="ts">
</script>

<template>
  <div class="min-h-screen bg-white text-slate-900">
    <Header />
    <RouterView />
    <Footer />
  </div>
</template>

<script lang="ts">
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import { RouterView } from 'vue-router'
export default { components: { Header, Footer, RouterView } }
</script>

<style scoped></style>
