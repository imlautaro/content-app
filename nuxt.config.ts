import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  content: {
    markdown: {
      remarkPlugins: () => ['remark-emoji'],
    }
  },
  modules: ['@nuxt/content']
})
