<template>
  <div class="app">
    <OrganismNavbar />
    <slot />
  </div>
</template>

<script>
export default {};
</script>

<style lang="postcss" scoped>
.app {
  @apply font-jbm;
}
</style>
