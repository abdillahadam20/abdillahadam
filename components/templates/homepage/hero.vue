<template>
  <section class="bg-white dark:bg-gray-900">
    <div
      class="max-w-screen-xl px-4 py-2 lg:py-8 mx-auto flex justify-between gap-16"
    >
      <div
        class="flex justify-center items-center flex-col-reverse lg:flex-row gap-4"
      >
        <div class="flex lg:flex-col gap-4">
          <MoleculesIcons
            v-for="(item, index) in icons"
            :key="index"
            :icons="item.title"
            sizes="24"
          />
        </div>
        <div class="flex flex-col gap-4">
          <div class="flex flex-col gap-4">
            <AtomsSubtitle title="Front End Developer" />
            <AtomsTitle title="Adam Abdillah" />
            <AtomsDescription
              description="I specialize in turning creative design ideas into responsive, pixel-perfect code. From wireframes to the final product, I craft smooth and intuitive web experiences that perfectly align with the original vision."
            />
          </div>
          <div>
            <Button variant="teal" class="rounded-full">
              <Icon
                name="hugeicons:arrow-down-03"
                class="text-white"
                size="20"
              />
              Download CV
            </Button>
          </div>
        </div>
      </div>
      <div class="w-full hidden lg:flex">
        <NuxtImg
          src="/static/Adam-Abdillah.png"
          class="w-full"
          alt="Adam Abdillah"
        />
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
const icons = [
  { title: "hugeicons:linkedin-01" },
  { title: "hugeicons:instagram" },
  { title: "hugeicons:github" },
];
</script>

<style lang="postcss" scoped></style>
