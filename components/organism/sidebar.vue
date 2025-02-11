<template>
  <div
    class="fixed top-0 left-0 z-40 w-56 h-screen duration-300 ease-in-out transition-all lg:hidden"
  >
    <!-- Overlay background -->
    <div
      v-if="isSidebarOpen"
      @click="toggleSidebar"
      class="fixed top-0 left-0 z-50 opacity-25 w-56 h-screen duration-300 ease-in-out transition-all lg:hidden"
      :class="overlayClass"
    ></div>

    <!-- Sidebar -->
    <aside
      id="default-sidebar"
      :class="sidebarClass"
      aria-label="Sidebar"
      class="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800"
    >
      <div>
        <NavigationMenu class="w-full">
          <NavigationMenuList
            class="flex flex-col justify-center items-start gap-4"
          >
            <NavigationMenuItem>
              <MoleculesToggleSwitch />
            </NavigationMenuItem>
            <NavigationMenuItem
              v-for="(item, index) in menu"
              :key="index"
              :class="{
                'bg-teal-500 text-white': isActive(item.href),
                'bg-transparent text-black dark:text-white': !isActive(
                  item.href
                ),
              }"
              class="w-48 p-2 rounded-lg"
            >
              <NavigationMenuLink :href="item.href">
                {{ item.title }}
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </aside>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
import { useRoute } from "vue-router"; // Menggunakan Vue Router untuk mendeteksi rute

// Deklarasi variabel reaktif untuk toggle sidebar
const isSidebarOpen = ref(false);

// Mendapatkan rute saat ini menggunakan Vue Router
const route = useRoute();

// Fungsi untuk mengecek apakah item aktif berdasarkan rute
const isActive = (href: string) => {
  return route.path === href; // Memeriksa apakah path saat ini cocok dengan href item
};

// Computed class untuk mengatur visibilitas sidebar
const sidebarClass = computed(() => {
  return isSidebarOpen.value
    ? "transform translate-x-0"
    : "transform -translate-x-0";
});

// Computed class untuk mengatur visibilitas overlay
const overlayClass = computed(() => {
  return isSidebarOpen.value
    ? "opacity-50" // Overlay dengan opacity saat sidebar terbuka
    : "opacity-0"; // Overlay tersembunyi saat sidebar tertutup
});

// Method untuk toggle sidebar
const toggleSidebar = () => {
  isSidebarOpen.value = !isSidebarOpen.value;
};

const menu = [
  { href: "/", title: "Home" },
  { href: "/portfolio", title: "Portfolio" },
  { href: "/experience", title: "Experience" },
  { href: "#", title: "Contact" },
];
</script>

<style>
/* Animasi untuk sidebar */
#default-sidebar {
  transition: transform 0.3s ease-in-out;
  transition-delay: 0.1s; /* Tambahkan delay */
}

/* Animasi untuk overlay */
.overlay {
  transition: opacity 0.3s ease-in-out;
}
</style>
