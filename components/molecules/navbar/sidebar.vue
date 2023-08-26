<template>
  <aside
    class="transform top-0 right-0 w-64 bg-white shadow-lg fixed h-full overflow-auto ease-in-out transition-all duration-300 z-30"
    :class="[!model ? 'translate-x-full' : '-translate-x-0']"
  >
    <div class="p-4">
      <ul class="flex flex-col justify-center items-start gap-4">
        <molecules-navbar-link
          v-for="(item, index) in response.data"
          :key="index"
          :data="item"
        />
      </ul>
    </div>
  </aside>
  <Transition name="fade">
    <div
      class="bg-gray-900 bg-opacity-75 dark:bg-opacity-80 fixed inset-0 z-10"
      :class="!model ? 'translate-x-full' : '-translate-x-0'"
      @click="handleToggleSidebar"
    />
  </Transition>
</template>

<script setup lang="ts">
const { data: response } = await useFetch(`/api/navbar`)

const props = defineProps({
  modelValue: {
    type: Boolean,
  },
})
const emit = defineEmits(['update:modelValue'])

const model = computed({
  get() {
    return props.modelValue
  },
  set(value) {
    emit('update:modelValue', value)
  },
})

const handleToggleSidebar = () => {
  emit('update:modelValue', !model)
}
</script>

<style scoped lang="postcss"></style>
