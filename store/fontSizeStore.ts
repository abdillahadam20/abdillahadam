// Create a store named 'fontSizeStore.js'
import { defineStore } from 'pinia'

export const useFontSizeStore = defineStore('fontSize', {
  state: () => ({
    size: 'base', // Default font size
  }),

  actions: {
    setFontSize(size: string): void {
      this.size = size
    },
  },
})
