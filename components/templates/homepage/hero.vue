<template>
  <section class="bg-white dark:bg-gray-900">
    <div
      class="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12"
    >
      <div class="mr-auto place-self-center lg:col-span-7 flex gap-4">
        <div class="flex flex-col gap-4">
          <MoleculesIcons
            v-for="(item, index) in icons"
            :key="index"
            :icons="item.title"
            sizes="24"
          />
        </div>
        <div>
          <AtomsSubtitle title="Front End Developer" />
          <AtomsTitle title="Adam Abdillah" /> 
          <AtomsDescription description="I specialize in turning creative design ideas into responsive, pixel-perfect code. From wireframes to the final product, I craft smooth and intuitive web experiences that perfectly align with the original vision." />
          <Button variant="teal">Download CV</Button>
        </div>
      </div>
      <div class="hidden lg:mt-0 lg:col-span-5 lg:flex">
        <NuxtImg src="/static/Adam-Abdillah.png" alt="Adam Abdillah" />
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
const icons = [
  { title: "hugeicons:linkedin-01" },
  { title: "hugeicons:linkedin-01" },
];
</script>

<style lang="postcss" scoped></style>
