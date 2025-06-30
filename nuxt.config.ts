// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  css: ['/public/assets/css/main.css'],
  app: {
    head: {
      title: 'ABN max', // default fallback title
      htmlAttrs: {
        lang: 'nl',
      },
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      ] 
    }
  },

  modules: [
    '@nuxt/eslint',
    '@nuxt/fonts',
    '@nuxt/icon',
    '@nuxt/image',
    '@nuxt/scripts',
    '@nuxt/ui',
    '@nuxtjs/tailwindcss',
    '@pinia/nuxt'
  ],
  fonts: {
    google: [
      {
        name: 'Chicle',       // Font family name
        weights: ['400'],     // Regular weight
        subsets: ['latin'],   // Ensure latin subset
        display: 'swap',      // Recommended for performance
      },
      {
        name: 'roboto',
        weights: ['500'],
        subsets: ['latin'],   // Ensure latin subset
        display: 'swap',      // Recommended for performance
      }
    ],
  },

  runtimeConfig: {
    public: {
      apiBase: 'http://api.tvmaze.com/',
      hostBase: 'http://localhost:3000'
    }
  }
})
