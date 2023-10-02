<template>
  <button
    :class="atomClass"
    :type="type"
  >
    <slot>{{ label }}</slot>
  </button>
</template>

<script lang="ts" setup>
import { PropType } from 'nuxt/dist/app/compat/capi'

const props = defineProps({
  label: {
    type: String,
    default: '',
  },
  type: {
    type: String as PropType<'submit' | 'reset' | 'button'>,
    default: 'button',
    validator: (value: string) => ['submit', 'reset', 'button'].includes(value),
  },
  color: {
    type: String,
    default: 'primary',
  },
  size: {
    type: String,
    default: 'md',
  },
})

const atomClass = [
  `button`,
  `button-${props.color}`,
  `button-${props.size}`,
  `button-${props.type}`,
]

// const primary = computed(() => props.color === 'primary')
// const secondary = computed(() => props.color === 'secondary')
// const tertiary = computed(() => props.color === 'tertiary')

// const classColor = computed(() => ({
//   'bg-sunsetorange-300 text-white': primary.value,
//   'bg-sunsetorange-200 text-white': secondary.value,
//   'bg-sunsetorange-100 text-white': tertiary.value,
// }))
</script>

<style scoped lang="postcss">
.button-primary {
  @apply bg-sunsetorange-300 text-white;
}

.button-secondary {
  @apply bg-sunsetorange-200 text-white;
}

.button-tertiary {
  @apply bg-sunsetorange-100 text-white;
}

.button-xs {
  @apply p-1;
}

.button-sm {
  @apply p-2;
}
</style>
