<template>
  <div class="bg-white h-full py-16 dark:bg-gray-900">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="text-center">
        <h2 class="text-base/7 font-semibold text-teal-500">Portofolio</h2>
        <p
          class="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl lg:text-balance"
        >
          My Work & Projects
        </p>
        <p class="mt-6 text-lg/8 text-gray-600">
          Explore my portfolio to see the range of projects I have worked on.
          Each project showcases my skills in building responsive, functional,
          and visually appealing websites and applications.
        </p>
      </div>
      <div class="mx-auto mt-16">
        <dl
          class="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16"
        >
          <MoleculesCard
            v-for="(item, index) in porto"
            :key="index"
            :href="item.href"
            :src="item.src"
            :alt="item.alt"
            :title="item.title"
            :description="item.description"
          >
            <Icon
              :name="icons.name"
              v-for="(icons, idx) in item.icon"
              :key="idx"
            />
          </MoleculesCard>
        </dl>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const porto = [
  {
    href: "https://www.kotapodomorotenjo.com/",
    src: "/static/kota-podomoro-tenjo.png",
    alt: "Kota Podomoro Tenjo",
    title: "Kota Podomoro Tenjo",
    description:
      "Proyek perumahan modern di Tenjo, Bogor, yang menawarkan hunian strategis dan nyaman. Website ini menyediakan informasi lengkap tentang fasilitas, tipe rumah, dan lokasi, memudahkan calon pembeli untuk menjelajahi pilihan properti serta mendapatkan update terbaru secara efisien.",
    icon: [{ name: "logos:tailwindcss-icon" }, { name: "logos:nuxt-icon" }],
  },
  {
    href: "#",
    src: "/static/simpus-health-care.png",
    alt: "SIMRS Simpus Health Care",
    title: "SIMRS Simpus Health Care",
    description:
      "Sistem manajemen rumah sakit modern yang mempermudah pengelolaan data pasien, jadwal perawatan, dan administrasi medis, meningkatkan efisiensi operasional dan kualitas layanan kesehatan.",
    icon: [
      { name: "logos:tailwindcss-icon" },
      { name: "logos:nuxt-icon" },
      { name: "simple-icons:shadcnui" },
    ],
  },
];
</script>

<style></style>
