<script setup lang="ts">
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
</script>

<template>
  <div class="min-h-screen bg-white text-slate-900">
    <Header />
    <router-view />
    <Footer />
  </div>
</template>

<style scoped></style>
