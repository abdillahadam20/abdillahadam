<template>
  <p class="description">{{ description }}</p>
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
.description {
  @apply select-text font-poppins;
}
</style>
