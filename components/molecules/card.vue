<script setup lang="ts">
defineProps({
  href: {
    type: String,
    default: ''
  },
  src: {
    type: String,
    default: ''
  },
  alt: {
    type: String,
    default: ''
  },
  title: {
    type: String,
    default: ''
  },
  description: {
    type: String,
    default: ''
  },
  icon: {
    type: String,
    default: ''
  }
})

</script>

<template>
  <NuxtLink :to="href" class="card">
    <img class="card-img" :src="src" :alt="alt">
    <div class="card-content">
      <h5>{{ title }}</h5>
      <p>{{description}}</p>
      <div class="card-icon">
        <slot />
        <!-- <Icon name="logos:nuxt-icon" />
        <Icon name="logos:tailwindcss-icon" /> -->
      </div>
    </div>
  </NuxtLink>
</template>

<style lang="postcss">
.card {
  @apply flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow-sm md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700;
}

.card-img {
  @apply object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg;
}

.card-content {
  @apply flex flex-col justify-between p-4 leading-normal truncate;
}

h5 {
  @apply mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white;
}

p {
  @apply mb-3 font-normal text-gray-700 dark:text-gray-400;
}

.card-icon {
  @apply flex gap-2 items-center justify-start;
}
</style>
