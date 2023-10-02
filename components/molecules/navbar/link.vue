<template>
  <li class="nav-list">
    <icon
      :name="data.icon"
      class="h-6 w-6"
    />
    <nuxt-link
      :to="data.href"
      class="nav-list-link"
    >

      <span class="nav-list-link-title">
        {{ data.title }}
      </span>
    </nuxt-link>
  </li>
</template>

<script setup lang="ts">
interface Link {
  title: string
  href: string
  icon: string
}

defineProps({
  data: {
    type: Object as PropType<Link>,
    default: () => ({}) as Link,
  },
})
</script>

<style scoped lang="postcss">
.nav-list {
  @apply flex justify-center items-center gap-2 relative;
  text-decoration: none;

  &-link {
    @apply font-medium lg:text-base text-sm font-poppins text-gray-800;
  }
}

:deep(a) {
  position: relative;
  text-decoration: none;
  padding: 0 10px;
}
:deep(a):after {
  @apply bg-sunsetorange-100;
  content: '';
  position: absolute;
  height: 3px;
  width: 0;
  left: 0;
  bottom: -10px;
  transition: 0.3s;
}
:deep(a):hover {
  @apply text-sunsetorange-400;
}
:deep(a):hover:after {
  width: 100%;
}
</style>
