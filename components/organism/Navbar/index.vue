<template>
  <nav class="nav">
    <div class="nav-container">
      <nuxt-link to="/">
        <AtomsLogo />
      </nuxt-link>
      <div class="flex md:order-2">
        <button
          type="button"
          class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          @click="download"
        >
          Download CV
        </button>
      </div>
      <div
        id="navbar-sticky"
        class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
      >
        <ul
          class="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white"
        >
          <MoleculesNavbarLink
            v-for="(item, index) in response.data"
            :key="index"
            :data="item"
          />
        </ul>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
const { data: response } = await useFetch(`/api/navbar`)

const download = () => {
  const link = document.createElement('a')
  link.href = '~/assets/documents/CV-Adam-Abdillah.pdf'
  link.download = 'CV-Adam-Abdillah.pdf'
  link.target = '_blank'
  link.click()
}
</script>

<style scoped lang="postcss">
.nav {
  @apply bg-white fixed w-full z-20 top-0 left-0 border-b border-gray-200;

  &-container {
    @apply max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4;
  }
}
</style>
