<template>
  <div class="app">
    <OrganismNavbar />
    <slot></slot>
    <OrganismFooter />
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped lang="postcss">
.app {
  @apply min-h-screen w-full h-full bg-white;
}
</style>
