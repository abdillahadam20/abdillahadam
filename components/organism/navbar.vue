<template>
  <div class="bg-white border-gray-200 dark:bg-gray-900">
    <div
      class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4"
    >
      <a
        href="https://flowbite.com/"
        class="flex items-center space-x-3 rtl:space-x-reverse"
      >
        <span
          class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white"
          >Abdillah</span
        >
      </a>
      <!-- Tombol untuk membuka Sidebar -->
      <button
        @click="toggleSidebar"
        data-collapse-toggle="navbar-default"
        type="button"
        class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
        aria-controls="navbar-default"
        aria-expanded="false"
      >
        <span class="sr-only">Open main menu</span>
        <svg
          class="w-5 h-5"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 17 14"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M1 1h15M1 7h15M1 13h15"
          />
        </svg>
      </button>
      <div class="hidden w-full md:block md:w-auto" id="navbar-default">
        <NavigationMenu>
          <NavigationMenuList class="flex items-center gap-4">
            <NavigationMenuItem>
              <MoleculesToggleSwitch />
            </NavigationMenuItem>
            <NavigationMenuItem v-for="(item, index) in menu" :key="index">
              <NavigationMenuLink :href="item.href">{{
                item.title
              }}</NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </div>
  </div>

  <!-- Menambahkan transition untuk smooth animation -->
  <transition
    name="sidebar-fade"
    @before-enter="beforeEnter"
    @enter="enter"
    @leave="leave"
  >
    <OrganismSidebar v-if="isSidebar" @closeSidebar="toggleSidebar" />
  </transition>
</template>

<script setup lang="ts">
import { ref } from "vue";

const menu = [
  { href: "/", title: "Home" },
  { href: "/portfolio", title: "Portfolio" },
  { href: "/experience", title: "Experience" },
  { href: "https://api.whatsapp.com/send/?phone=628577686939&text&type=phone_number&app_absent=0", title: "Contact" },
];

const isSidebar = ref(false);
const emit = defineEmits();

// Fungsi untuk toggle sidebar
const toggleSidebar = () => {
  isSidebar.value = !isSidebar.value;
  emit("toggleSidebar", isSidebarOpen.value);
};

// Method untuk menambahkan animasi transisi
const beforeEnter = (el: HTMLElement) => {
  el.style.transition = "transform 0.3s ease-in-out, opacity 0.3s ease-in-out";
  el.style.transform = "translateX(-100%)";
  el.style.opacity = "0";
};

const enter = (el: HTMLElement) => {
  el.offsetHeight; // Trigger reflow to enable transition
  el.style.transition = "transform 0.3s ease-in-out, opacity 0.3s ease-in-out";
  el.style.transform = "translateX(0)";
  el.style.opacity = "1";
};

const leave = (el: HTMLElement) => {
  el.style.transition = "transform 0.3s ease-in-out, opacity 0.3s ease-in-out";
  el.style.transform = "translateX(-100%)";
  el.style.opacity = "0";
};
</script>

<style scoped>
/* Transisi untuk fade dan slide sidebar */
.sidebar-fade-enter-active,
.sidebar-fade-leave-active {
  transition: opacity 0.3s ease, transform 0.3s ease;
}

.sidebar-fade-enter, .sidebar-fade-leave-to /* .sidebar-fade-leave-active in <2.1.8 */ {
  opacity: 0;
  transform: translateX(-100%);
}
</style>
