<template>
  <nav class="nav">
    <div class="nav-container">
      <div class="nav-container-collapse">
        <div class="nav-container-collapse-logo">
          <nuxt-link
            to="/"
            class="nav-container-collapse-logo-link"
          >
            <AtomsLogo />
          </nuxt-link>
        </div>
        <ul class="nav-container-collapse-list">
          <MoleculesNavbarLink
            v-for="(item, index) in response.data"
            :key="index"
            :data="item"
          />
        </ul>
        <div class="nav-container-collapse-button-download">
          <button
            class="hidden lg:inline-flex"
            @click="download"
          >
            Download CV
          </button>
          <button
            class="lg:hidden flex p-2 rounded-md"
            @click="handleToggleSidebar"
          >
            <icon
              name="heroicons:bars-3-bottom-left-20-solid"
              class="w-8 h-8 text-sunsetorange-100"
            />
          </button>
          <MoleculesNavbarSidebar v-model="isSidebarOpen" />
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
const { data: response } = await useFetch(`/api/navbar`)

const download = () => {
  const link = document.createElement('a')
  link.href = 'assets/documents/CV-Adam-Abdillah.pdf'
  link.download = 'CV-Adam-Abdillah.pdf'
  link.target = '_blank'
  link.click()
}

const isSidebarOpen = ref(false)
const handleToggleSidebar = () => {
  isSidebarOpen.value = !isSidebarOpen.value
}
</script>

<style scoped lang="postcss">
.nav {
  @apply bg-white shadow-md;

  &-container {
    @apply max-w-7xl mx-auto p-4;

    &-collapse {
      @apply flex items-center justify-between;

      &-logo {
      }

      &-list {
        @apply hidden lg:flex justify-center items-center gap-4;
      }

      &-button-download {
      }
    }
  }
}
</style>
