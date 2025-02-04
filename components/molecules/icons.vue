<template>
  <div class="icons">
    <Icon :name="icons" :size="sizes" />
  </div>
</template>

<script lang="ts" setup>
defineProps({
  icons: {
    type: String,
    default: "",
  },
  sizes: {
    type: String,
    default: "",
  },
});
</script>

<style lang="postcss" scoped>
.icons {
  @apply shadow-md rounded-full bg-teal-500 w-10 h-10 flex text-white justify-center items-center;
}
</style>
