<template>
  <div class="">
    <div class="max-w-7xl mx-auto">
      <div class="flex justify-between items-center px-4">
        <div class="flex flex-col gap-4 w-[30rem] items-start justify-center">
          <AtomsTextTitle
            v-motion-slide-left
            :title="data?.title"
            class="text-orange-400 font-bold text-6xl"
          />
          <AtomsTextDescription
            v-motion-slide-right
            :description="data?.description"
            class="text-surface-400 font-medium text-base"
          />
          <AtomsButton
            type="submit"
            color="tertiary"
            size="sm"
            >Contact Me</AtomsButton
          >
        </div>
        <div>
          <img
            v-motion-slide-visible-right
            src="~\assets\img\profile-adam.png"
            alt="Adam Abdillah"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const { data: response } = await useFetch(`/api/hero`)
const data = response.value?.data
</script>

<style lang="postcss" scoped></style>
