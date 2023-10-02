<template>
  <h1 class="title">
    {{ title }}
  </h1>
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
  @apply font-poppins select-text;
}
</style>
