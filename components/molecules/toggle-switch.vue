<template>
  <label>
    <input
      type="checkbox"
      value=""
      class="sr-only peer"
      @change="toggleTheme"
    />
    <div
      class="relative w-14 h-8 bg-gray-200 flex justify-center items-center transition-all duration-500 ease-in-out peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-gray-300 dark:peer-focus:ring-gray-800 rounded-full peer dark:bg-gray-700 peer-checked:bg-gray-600 dark:peer-checked:bg-gray-600"
    >
      <div
        v-if="!isDarkMode"
        class="bg-teal-500 transition-all duration-500 ease-in-out w-6 h-6 absolute left-1 rounded-full flex justify-center items-center"
      >
        <Icon
          name="hugeicons:moon-02"
          class="text-white"
          width="20"
          height="20"
        />
      </div>

      <div
        v-else
        class="bg-teal-500 transition-all duration-500 ease-in-out w-6 h-6 absolute right-1 rounded-full flex justify-center items-center"
      >
        <Icon
          name="hugeicons:sun-02"
          class="text-white"
          width="20"
          height="20"
        />
      </div>
    </div>
  </label>
</template>

<script setup lang="ts">
const isDarkMode = ref(false);

const toggleTheme = () => {
  isDarkMode.value = !isDarkMode.value;
  if (isDarkMode.value) {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }
};
</script>

<style scoped lang="postcss">
label {
  @apply inline-flex items-center cursor-pointer;
}
</style>
