<template>
  <div class="icon">
    <img
      src="~/assets/img/profile.png"
      alt="Male icons created by Nurlaili - Flaticon"
    />
    <p>Adam Abdillah</p>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="postcss">
.icon {
  @apply flex justify-center items-center gap-4;

  img {
    @apply w-12;
  }

  p {
    @apply hover:text-sunsetorange-100 font-bold font-poppins text-lg text-slate-800 hidden md:inline-flex;
  }
}
</style>
