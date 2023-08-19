<template>
  <li>
    <nuxt-link :to="data.href">
      <span class="title-link">
        {{ data.title }}
      </span>
    </nuxt-link>
  </li>
</template>

<script setup lang="ts">
interface Link {
  title: string
  href: string
}

defineProps({
  data: {
    type: Object as PropType<Link>,
    default: () => ({}) as Link,
  },
})
</script>

<style scoped lang="postcss">
span {
  @apply text-base-tasty-500 font-bold text-base font-poppins;
}
</style>
