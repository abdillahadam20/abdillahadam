// useScroll.ts

import { ref, onMounted, onBeforeUnmount } from 'vue'

export function useScroll() {
  const scrolled = ref(false)

  const handleScroll = () => {
    scrolled.value = window.scrollY > 0
  }

  onMounted(() => {
    window.addEventListener('scroll', handleScroll)
  })

  onBeforeUnmount(() => {
    window.removeEventListener('scroll', handleScroll)
  })

  return {
    scrolled,
  }
}
