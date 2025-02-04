<template>
  <h1 class="title">{{ title }}</h1>
</template>

<script lang="ts" setup>
defineProps({
  title: {
    type: String,
    default: "",
  },
});
</script>

<style lang="postcss" scoped>
.title {
  @apply text-teal-500 font-semibold text-5xl;
}
</style>
