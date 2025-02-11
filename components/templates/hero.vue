<template>
  <section class="bg-white relative dark:bg-gray-900 bg-dots">
    <div
      class="hidden relative lg:flex flex-col gap-4 justify-center items-center"
    >
      <NuxtImg class="absolute top-0 opacity-10" src="/static/bg-logo.png" />
    </div>
    <div
      class="max-w-screen-xl px-4 py-2 lg:py-8 mx-auto flex justify-between gap-16 z-10 relative"
    >
      <div
        class="flex justify-center items-start lg:items-center flex-col-reverse lg:flex-row gap-4"
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
            <Button
              variant="teal"
              class="rounded-full"
              @click="downloadCV"
              :disabled="isLoading"
            >
              <template v-if="isLoading">
                <!-- Loading Spinner -->
                <Icon
                  name="eos-icons:spinner"
                  class="animate-spin text-white"
                  size="20"
                />
              </template>
              <template v-else>
                <Icon
                  name="hugeicons:arrow-down-03"
                  class="text-white"
                  size="20"
                />
                Download CV
              </template>
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

const isLoading = ref(false);

const downloadCV = () => {
  isLoading.value = true;

  setTimeout(() => {
    const link = document.createElement("a");
    link.href = "/static/Curriculum-Vitae-Adam-Abdillah.pdf";
    link.download = "CV-Adam-Abdillah.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    isLoading.value = false;
  }, 3000);
};
</script>

<style lang="postcss" scoped>
/* Background dengan pola titik-titik */
.bg-dots {
  background-image: radial-gradient(
    circle,
    rgba(0, 0, 0, 0.1) 1px,
    transparent 1px
  );
  background-size: 20px 20px;
}

/* Dark mode */
.dark .bg-dots {
  background-image: radial-gradient(
    circle,
    rgba(255, 255, 255, 0.1) 1px,
    transparent 1px
  );
}
</style>
