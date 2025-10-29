import { defineStore } from 'pinia'
export const useMainStore = defineStore('main', {
  state: () => ({
    darkMode: false,
  }),
  getters: {
    isDarkMode: (state) => state.darkMode,
  },
  actions: {
    toggleDarkMode() {
      this.darkMode = !this.darkMode
    },
  },
})