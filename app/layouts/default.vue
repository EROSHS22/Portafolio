<template>
  <div class="flex min-h-screen flex-col">
    <header
      class="relative flex w-full items-center justify-between border-b border-brutal-surface px-4 py-8 md:px-8"
    >
      <a href="/" class="group flex cursor-pointer items-end gap-3">
        <span
          class="font-heading text-xl uppercase tracking-widest text-brutal-text transition-colors group-hover:text-brutal-accent md:text-2xl"
          >Pindaro</span
        >
        <div class="-mb-2 flex h-10 w-10 items-center justify-center">
          <img
            src="~/assets/img/logo.png"
            alt="Pixel Art Logo"
            class="h-full w-full object-contain"
            style="image-rendering: pixelated"
          />
        </div>
        <span
          class="font-heading text-xl uppercase tracking-widest text-brutal-text transition-colors group-hover:text-brutal-accent md:text-2xl"
          >Heras</span
        >
      </a>

      <div class="flex items-center gap-6">
        <button
          class="cursor-pointer transition-colors duration-200 hover:text-brutal-accent"
        >
          <svg class="h-5 w-5 fill-current" viewBox="0 0 24 24">
            <path
              d="M12 3a9 9 0 1 0 9 9c0-.46-.04-.92-.1-1.36a5.389 5.389 0 0 1-4.4 2.26 5.403 5.403 0 0 1-3.14-9.8c-.44-.06-.9-.1-1.36-.1z"
            />
          </svg>
        </button>

        <button
          class="group ml-2 flex cursor-pointer flex-col gap-1.5 focus:outline-none"
          aria-label="Abrir menú"
          @click="toggleMenu"
        >
          <span
            :class="isMenuOpen ? 'translate-y-2 rotate-45' : ''"
            class="h-[2px] w-8 bg-brutal-text transition-all duration-300 group-hover:bg-brutal-accent"
          />
          <span
            :class="isMenuOpen ? 'opacity-0' : ''"
            class="h-[2px] w-8 bg-brutal-text transition-all duration-300 group-hover:bg-brutal-accent"
          />
          <span
            :class="isMenuOpen ? '-translate-y-2 -rotate-45' : ''"
            class="h-[2px] w-8 bg-brutal-text transition-all duration-300 group-hover:bg-brutal-accent"
          />
        </button>
      </div>

      <transition
        enter-active-class="transition duration-200 ease-out"
        enter-from-class="opacity-0 -translate-y-2"
        enter-to-class="opacity-100 translate-y-0"
        leave-active-class="transition duration-150 ease-in"
        leave-from-class="opacity-100 translate-y-0"
        leave-to-class="opacity-0 -translate-y-2"
      >
        <div
          v-if="isMenuOpen"
          class="absolute left-0 top-full z-50 w-full border-b border-brutal-surface bg-black p-6 shadow-2xl md:px-8"
        >
          <div class="mx-auto flex max-w-7xl flex-col gap-4 font-mono text-sm">
            <span class="text-brutal-accent">> system_nav --open</span>
            <div
              class="my-2 flex flex-col gap-3 border-l border-brutal-surface pl-4"
            >
              <a
                href="/"
                class="py-1 text-gray-400 transition-colors hover:text-brutal-accent"
                @click="isMenuOpen = false"
              >
                // 01. Inicio
              </a>
              <a
                href="/sobre-mi"
                class="py-1 text-gray-400 transition-colors hover:text-brutal-accent"
                @click="isMenuOpen = false"
              >
                // 02. Sobre Mí
              </a>
              <a
                href="https://github.com/EROSHS22"
                target="_blank"
                class="py-1 text-gray-400 transition-colors hover:text-brutal-accent"
                @click="isMenuOpen = false"
              >
                // 03. GitHub
              </a>
            </div>
            <span class="text-xs text-gray-600"
              >Presiona el sándwich de nuevo para cerrar.</span
            >
          </div>
        </div>
      </transition>
    </header>

    <main class="flex-grow p-4 md:p-8">
      <slot />
    </main>

    <footer
      class="mt-auto border-t border-brutal-surface bg-brutal-bg px-4 pb-12 pt-20 md:px-8"
    >
      <div
        class="mx-auto grid max-w-7xl grid-cols-1 gap-x-12 gap-y-16 lg:grid-cols-12"
      >
        <div class="flex flex-col lg:col-span-7">
          <div class="flex items-end gap-4">
            <span
              class="font-heading text-3xl uppercase tracking-widest text-brutal-text md:text-4xl"
              >Pindaro</span
            >
            <div class="-mb-2 flex h-12 w-12 items-center justify-center">
              <img
                src="~/assets/img/logo.png"
                alt="Pixel Art Logo"
                class="h-full w-full object-contain"
                style="image-rendering: pixelated"
              />
            </div>
            <span
              class="font-heading text-3xl uppercase tracking-widest text-brutal-text md:text-4xl"
              >Heras</span
            >
          </div>

          <p
            class="mt-6 flex items-center gap-3 font-sans text-sm text-gray-500"
          >
            <span class="text-lg font-bold text-brutal-accent">/*</span>
            <span class="tracking-wide">{{ currentPhrase }}</span>
            <span class="text-lg font-bold text-brutal-accent">*/</span>
          </p>

          <div
            class="mt-8 flex max-w-lg flex-col gap-4 border border-brutal-surface bg-black p-6"
          >
            <label
              class="font-sans text-sm uppercase tracking-widest text-brutal-text"
              >> Ejecutar_Conexión</label
            >

            <div
              class="mt-2 flex items-end gap-4 border-b border-brutal-surface pb-3 font-sans transition-colors focus-within:border-gray-500"
            >
              <div
                class="flex flex-col pb-1 text-sm font-bold leading-[1.1] text-brutal-accent"
              >
                <span>~</span>
                <span>$</span>
              </div>

              <input
                type="email"
                placeholder="ingresa_tu_correo@dominio.com"
                class="w-full border-none bg-transparent text-sm text-[#8a8a8a] placeholder-[#3a3a3a] outline-none transition-colors focus:text-brutal-text"
              />

              <button
                class="cursor-pointer bg-[#1C1C1C] px-5 py-2 text-xs font-bold uppercase tracking-widest text-brutal-text transition-colors hover:bg-brutal-text hover:text-black"
              >
                Enter
              </button>
            </div>
          </div>
        </div>

        <div
          class="grid grid-cols-2 gap-12 pt-2 font-sans text-sm lg:col-span-5 lg:gap-8"
        >
          <div class="flex flex-col gap-6">
            <h3
              class="border-b border-brutal-surface pb-3 font-bold uppercase tracking-widest text-brutal-accent"
            >
              Red de Nodos
            </h3>
            <a
              href="https://github.com/EROSHS22"
              class="text-gray-500 transition-all duration-200 hover:translate-x-1 hover:text-brutal-text"
              >> GitHub</a
            >
            <a
              href="#"
              class="text-gray-500 transition-all duration-200 hover:translate-x-1 hover:text-brutal-text"
              >> LinkedIn</a
            >
            <a
              href="/sobre-mi"
              class="text-gray-500 transition-all duration-200 hover:translate-x-1 hover:text-brutal-text"
              >> Sobre Mi</a
            >
          </div>

          <div class="flex flex-col gap-6">
            <h3
              class="border-b border-brutal-surface pb-3 font-bold uppercase tracking-widest text-brutal-accent"
            >
              Status
            </h3>
            <span class="text-gray-500">> v2.0.26</span>
            <span class="flex items-center gap-3 text-gray-500">
              <span
                class="h-2 w-2 animate-pulse rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.6)]"
              />
              Operativo
            </span>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const phrases = [
  'Optimizando sistemas. Automatizando procesos.',
  'Desarrollo Frontend. Precisión de Backend.',
  'Escribiendo código limpio desde Michoacán.',
  'La calidad del software no es negociable.',
  'Resolviendo problemas complejos con soluciones simples.'
]

const currentPhrase = ref('Iniciando secuencia de arranque...')
const isMenuOpen = ref(false)

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

onMounted(() => {
  const randomIndex = Math.floor(Math.random() * phrases.length)
  currentPhrase.value = phrases[randomIndex]
})
</script>
