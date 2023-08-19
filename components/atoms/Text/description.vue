<template>
  <p>{{ description }}</p>
</template>

<script setup lang="ts">
defineProps({
  description: {
    type: String,
    default: '',
  },
})
</script>

<style scoped lang="postcss">
:deep(.section) {
  @apply bg-base-tasty-200;
}
</style>
