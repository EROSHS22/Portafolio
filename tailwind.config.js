/** @type {import('tailwindcss').Config} */
import defaultTheme from 'tailwindcss/defaultTheme'

export default {
  content: [
    './app/components/**/*.{js,vue,ts}',
    './app/layouts/**/*.vue',
    './app/pages/**/*.vue',
    './app/plugins/**/*.{js,ts}',
    './app/app.vue',
    './app/error.vue'
  ],
  theme: {
    extend: {
      // 900px es el corte de dos columnas pedido para la seccion de proyectos.
      screens: {
        ...defaultTheme.screens,
        tablet: '900px'
      },
      colors: {
        brutal: {
          bg: '#121212',
          surface: '#1C1C1C',
          accent: '#FF5722',
          text: '#D4D4D4',
          muted: '#8A8A8A',
          edge: '#333333',
          frame: '#3A3A3A'
        }
      },
      fontFamily: {
        sans: ['"Space Mono"', 'monospace'],
        heading: ['"Cinzel"', 'serif']
      }
    }
  },
  plugins: []
}
