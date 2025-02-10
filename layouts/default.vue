<template>
  <div class="app">
    <OrganismNavbar />
    <slot />
  </div>
</template>

<script setup lang="ts">
import { animate, scroll } from "motion";

const parallaxElement = ref(null);
</script>

<style lang="postcss" scoped>
.app {
  @apply font-jbm dark:bg-gray-900 w-full h-screen bg-white overflow-hidden;
}

html,
body {
  @apply m-0 p-0 h-full w-full overflow-hidden;
}
</style>
