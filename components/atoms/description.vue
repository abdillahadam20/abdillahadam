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
  @apply font-normal text-base;
}
</style>
