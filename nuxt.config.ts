import { fileURLToPath } from 'node:url'

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/google-fonts',
    '@nuxt/eslint',
    '@nuxtjs/i18n'
  ],
  runtimeConfig: {
    public: {
      githubUser: 'EROSHS22'
    }
  },
  css: ['~/assets/css/main.css'],
  vite: {
    publicDir: fileURLToPath(new URL('./public', import.meta.url))
  },
  app: {
    head: {
      title: 'Pindaro Heras — Ingeniero en sistemas computacionales',
      htmlAttrs: { lang: 'es' },
      meta: [
        {
          name: 'description',
          content:
            'Portafolio de Pindaro Heras, ingeniero en sistemas computacionales. Estructura rigida para el sistema, adaptabilidad organica para la interfaz.'
        },
        { name: 'theme-color', content: '#121212' },
        { property: 'og:type', content: 'website' },
        {
          property: 'og:title',
          content: 'Pindaro Heras — Ingeniero en sistemas computacionales'
        },
        {
          property: 'og:description',
          content: 'Construyo software vivo. Portafolio y proyectos.'
        },
        // TODO: og:image pendiente de hero-monitor.png (1200x630)
        { property: 'og:locale', content: 'es_MX' }
      ]
    }
  },
  googleFonts: {
    families: {
      Cinzel: [400, 700, 900],
      'Space+Mono': [400, 700]
    },
    display: 'swap'
  },
  i18n: {
    locales: [
      { code: 'es', name: 'Español', file: 'es.json' },
      { code: 'en', name: 'English', file: 'en.json' }
    ],
    lazy: true,
    langDir: 'locales',
    defaultLocale: 'es',
    strategy: 'no_prefix',

    detectBrowserLanguage: {
      useCookie: true,
      redirectOn: 'root',
      fallbackLocale: 'es'
    }
  }
})
