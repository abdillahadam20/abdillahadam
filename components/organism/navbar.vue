<script setup lang="ts">
import { MoleculesIcons } from "#components";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { ref } from 'vue';

const menu = [
  { href: "#", title: "Home" },
  { href: "#", title: "Portfolio" },
  { href: "#", title: "Experience" },
  { href: "#", title: "Contact" },
];

const isDarkMode = ref(false);

const toggleMenu = () => {
  isDarkMode.value = !isDarkMode.value;

  if (isDarkMode.value) {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }
};
</script>

<template>
  <div class="bg-white border-gray-200 dark:bg-gray-900">
    <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
      <a href="https://flowbite.com/" class="flex items-center space-x-3 rtl:space-x-reverse">
        <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Adam Abdillah</span>
      </a>
      <button data-collapse-toggle="navbar-default" type="button"
        class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
        aria-controls="navbar-default" aria-expanded="false">
        <span class="sr-only">Open main menu</span>
        <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
            d="M1 1h15M1 7h15M1 13h15" />
        </svg>
      </button>
      <div class="hidden w-full md:block md:w-auto" id="navbar-default">
        <NavigationMenu>
          <NavigationMenuList class="flex items-center gap-4">
            <NavigationMenuItem class="rounded-full w-[2rem] bg-teal-200 flex justify-between items-center p-2">
              <transition name="fade">
                <Icon
                  v-if="!isDarkMode"
                  name="hugeicons:moon-02"
                  @click="toggleMenu"
                  class="cursor-pointer"
                />
              </transition>
              <transition name="fade">
                <Icon
                  v-if="isDarkMode"
                  name="hugeicons:sun-02"
                  @click="toggleMenu"
                  class="cursor-pointer text-black"
                />
              </transition>
            </NavigationMenuItem>
            <NavigationMenuItem v-for="(item, index) in menu" :key="index">
              <NavigationMenuLink href="#">{{ item.title }}</NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Transition for the icons (moon and sun) */
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s ease;
}
.fade-enter, .fade-leave-to /* .fade-leave-active in <2.1.8 */ {
  opacity: 0;
}

.fade-enter-active {
  animation: fadeIn 0.5s ease-in-out;
}
.fade-leave-active {
  animation: fadeOut 0.5s ease-in-out;
}

@keyframes fadeIn {
  0% {
    opacity: 0;
    transform: scale(0.9);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}

@keyframes fadeOut {
  0% {
    opacity: 1;
    transform: scale(1);
  }
  100% {
    opacity: 0;
    transform: scale(0.9);
  }
}

</style>
