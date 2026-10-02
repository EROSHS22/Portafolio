export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', '@nuxtjs/google-fonts', '@nuxt/eslint'],
  css: ['~/assets/css/main.css'],
  googleFonts: {
    families: {
      Cinzel: [400, 700, 900],
      'Space+Mono': [400, 700]
    },
    display: 'swap'
  }
})
