<template>
  <h1 class="title">{{ title }}</h1>
</template>

<script lang="ts" setup>
defineProps({
  title: {
    type: String,
    default: '',
  },
})
</script>

<style scoped lang="postcss">
.title {
  @apply font-poppins text-xl md:text-3xl lg:text-5xl font-bold select-text text-slate-900;
}
</style>
e
