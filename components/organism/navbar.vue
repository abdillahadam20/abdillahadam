<script setup lang="ts">
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

const menu = [
  { href: "#", title: "Home" },
  { href: "#", title: "Portofolio" },
  { href: "#", title: "Experience" },
  { href: "#", title: "Contact" },
];

const isDark = ref(false);

const toggleMenu = () => {
  isDark.value = !isDark.value;

  if (isDark.value) {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }
};
</script>

<template>
  <div class="">
    <div class="max-w-7xl mx-auto">
      <div class="flex justify-between items-center">
        <!-- Logo -->
        <div>
          <p>Adam Abdillah</p>
        </div>

        <div class="flex gap-4 items-center justify-center">
          <div>
            <Icon
              name="hugeicons:moon-02"
              @click="toggleMenu"
              v-if="!isDark"
              class="cursor-pointer"
            />
            <!-- Icon Sun (Light Mode) -->
            <Icon
              name="hugeicons:sun-02"
              @click="toggleMenu"
              v-if="isDark"
              class="cursor-pointer"
            />
          </div>

          <!-- Menu -->
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem v-for="(item, index) in menu" :key="index">
                <NavigationMenuLink href="#">{{
                  item.title
                }}</NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      </div>
    </div>
  </div>
</template>
