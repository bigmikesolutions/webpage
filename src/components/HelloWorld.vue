<template>
  <div>{{ msg }}</div>
</template>

<script setup lang="ts">
interface Props {
  msg: string
}
const props = defineProps<Props>()
</script>
