<template>
  <h1 class="title">{{ title }}</h1>
</template>

<script setup lang="ts">
defineProps({
  title: {
    type: String,
    default: '',
  },
})
</script>

<style scoped>
.title {
  @apply font-poppins select-text lg:text-4xl md:text-2xl text-base font-bold text-tasty-500;
}
</style>
