import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt({
  rules: {
    'vue/multi-word-component-names': 'off',
    // Regla de Vue 2. Nuxt 4 corre Vue 3, donde un template puede tener varios
    // elementos raiz (fragmentos). La config por defecto de Nuxt la trae activa.
    'vue/no-multiple-template-root': 'off',
    'no-console': 'warn'
  }
})