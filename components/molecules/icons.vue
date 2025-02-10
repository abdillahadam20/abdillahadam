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
  classes: {
    type: String,
    default: "",
  },
});
</script>

<style lang="postcss" scoped>
.icons {
  @apply text-teal-500 hover:bg-teal-500 hover:text-white shadow-md rounded-full border-2 border-teal-500 w-10 h-10 flex transition-all ease-in-out duration-300 cursor-pointer justify-center items-center;
}
</style>
