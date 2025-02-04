<template>
  <p class="description">{{ description }}</p>
</template>

<script lang="ts" setup>
defineProps({
  description: {
    type: String,
    default: "",
  },
});
</script>

<style lang="postcss" scoped>
.description {
  @apply text-teal-500 font-semibold text-5xl;
}
</style>
