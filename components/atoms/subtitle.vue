<template>
  <p class="sub-title">{{ title }}</p>
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
.sub-title {
  @apply text-teal-500 font-semibold text-lg;
}
</style>
