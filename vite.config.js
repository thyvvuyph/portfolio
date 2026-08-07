import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  base: '/portfolio/',
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        beingBees: resolve(__dirname, 'being-bees.html'),
        graduation2026: resolve(__dirname, 'graduation-2026.html'),
      }
    }
  }
})
