<template>
  <p>{{ subtitle }}</p>
</template>

<script setup lang="ts">
defineProps({
  subtitle: {
    type: String,
    default: '',
  },
})
</script>

<style scoped></style>
