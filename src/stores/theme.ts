import { shallowRef } from 'vue'
import type { Ref } from 'vue'
import { defineStore } from 'pinia'

export const useThemeStore = defineStore('theme', () => {
  const theme: Ref<string> = shallowRef('dark')
  function toggle() {
    if (theme.value === 'light') {
        theme.value = 'dark'
        localStorage.setItem('theme', 'dark')
      } else {
        theme.value = 'light' 
        localStorage.setItem('theme', 'light')
    }
  }

  return { theme, toggle }
})
