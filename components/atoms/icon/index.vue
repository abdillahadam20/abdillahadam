<template>
  <component :is="displayedIcon" />
</template>

<script lang="ts" setup>
const props = defineProps({
  icon: {
    type: String,
    default: '',
  },
})

const displayedIcon = resolveComponent(`atom-svg-${props.icon}`, false)
</script>
