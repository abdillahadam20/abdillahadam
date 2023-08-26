<template>
  <button :class="buttonClass">
    <slot></slot>
  </button>
</template>

<script setup>
// import { defineProps } from 'vue'

// const props = defineProps({
//   size: String,
//   color: String,
// })

// const buttonClass = `btn ${props.size ? `btn-${props.size}` : ''} ${
//   props.color ? `btn-${props.color}` : ''
// }`
</script>

<style scoped>
.btn {
  padding: 10px 20px;
  border: none;
  cursor: pointer;
}

.btn-xs {
  font-size: 12px;
}

.btn-sm {
  font-size: 14px;
}

.btn-md {
  font-size: 16px;
}

.btn-lg {
  font-size: 18px;
}

.btn-primary {
  background-color: blue;
  color: white;
}

.btn-secondary {
  background-color: gray;
  color: white;
}

/* Add more colors as needed */
</style>
