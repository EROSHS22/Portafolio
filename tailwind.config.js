/** @type {import('tailwindcss').Config} */
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
      colors: {
        brutal: {
          bg: '#121212',
          surface: '#1C1C1C',
          accent: '#FF5722',
          text: '#D4D4D4'
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
