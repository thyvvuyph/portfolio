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
        missCampaign: resolve(__dirname, 'miss-campaign.html'),
        alFrescos: resolve(__dirname, 'al-frescos.html'),
        larbthai: resolve(__dirname, 'larbthai.html'),
        texasToplineMotors: resolve(__dirname, 'texas-topline-motors.html'),
        logoVarious: resolve(__dirname, 'logo-various.html'),
        jacksonsSteakhouse: resolve(__dirname, 'jacksons-steakhouse.html'),
        orantNeon: resolve(__dirname, 'orant-neon.html'),
      }
    }
  }
})
