<template>
  <div>
    <button :type="type">
      <slot />
    </button>
  </div>
</template>

<script setup lang="ts">
defineProps({
  type: {
    type: String as PropType<'submit' | 'reset' | 'button'>,
    default: 'button',
    validator: (value: string) => ['submit', 'reset', 'button'].includes(value),
  },
})
</script>

<style scoped></style>
