<script setup lang="ts">
import { story } from '~/data/about'
import { useGithubProfile } from '~/composables/useGithubProfile'

const { githubUser } = useRuntimeConfig().public
const { data: profile } = await useGithubProfile()
</script>

<template>
  <section
    id="sobre-mi"
    aria-labelledby="sobre-mi-title"
    class="mt-[120px] scroll-mt-8"
  >
    <h2
      id="sobre-mi-title"
      class="mx-auto mb-12 max-w-7xl px-4 font-sans text-[clamp(0.75rem,1.2vw,0.875rem)] uppercase tracking-[0.14em] text-brutal-muted md:px-8"
    >
      &gt; SOBRE MÍ
    </h2>

    <div
      class="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-4 md:grid-cols-[1.1fr_0.9fr] md:gap-14 md:px-8"
    >
      <div>
        <h3
          class="font-heading text-[clamp(1.75rem,4vw,3rem)] uppercase leading-[1.1] tracking-[0.04em] text-brutal-text"
        >
          Hola, soy Píndaro.
        </h3>

        <p
          class="mt-5 max-w-[46ch] font-sans text-[0.8125rem] leading-[1.9] text-brutal-muted md:text-sm"
        >
          Construyo software vivo desde Morelia. Esto es mi historial, en el
          formato que mejor entiendo.
        </p>

        <p
          class="mt-10 font-sans text-[0.6875rem] uppercase tracking-[0.1em] text-brutal-muted"
        >
          $ git log --oneline
        </p>

        <ol
          role="list"
          class="mt-6 flex flex-col gap-8 border-l border-brutal-muted/30 pl-6"
        >
          <li v-for="item in story" :key="item.hash" class="relative">
            <span
              aria-hidden="true"
              class="absolute -left-[1.8rem] top-1.5 h-2 w-2 rounded-full bg-brutal-accent"
            />
            <p
              class="font-sans text-[0.6875rem] uppercase tracking-[0.1em] text-brutal-muted"
            >
              <span aria-hidden="true" class="text-brutal-accent">
                {{ item.hash }}
              </span>
              {{ item.label }}
            </p>
            <h4
              class="mt-1 font-heading text-[clamp(1.0625rem,1.8vw,1.25rem)] uppercase leading-[1.2] tracking-[0.05em] text-brutal-text"
            >
              {{ item.title }}
            </h4>
            <p
              class="mt-2 max-w-[46ch] font-sans text-[0.8125rem] leading-[1.9] text-brutal-muted md:text-sm"
            >
              {{ item.description }}
            </p>
          </li>
        </ol>
      </div>

      <div class="md:sticky md:top-8 md:self-start">
        <GithubProfileCard v-if="profile" :profile="profile" />
        <div
          v-else
          class="rounded-md border border-brutal-muted/30 bg-[#161616] p-5 md:p-6"
        >
          <p
            class="font-sans text-[0.6875rem] uppercase tracking-[0.1em] text-brutal-muted"
          >
            [ GitHub: @{{ githubUser }} ]
          </p>
          <p class="mt-4 font-sans text-sm leading-[1.9] text-brutal-muted">
            No pude cargar el perfil en este momento.
          </p>
          <a
            :href="`https://github.com/${githubUser}`"
            target="_blank"
            rel="noopener noreferrer"
            class="mt-5 inline-flex min-h-11 items-center rounded-md border border-brutal-text px-5 py-2.5 font-sans text-xs font-bold uppercase tracking-[0.12em] text-brutal-text transition-[transform,border-color,color] duration-200 ease-out hover:-translate-y-0.5 hover:border-brutal-accent hover:text-brutal-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brutal-accent motion-reduce:transform-none motion-reduce:transition-none"
          >
            Ver perfil en GitHub
          </a>
        </div>
      </div>
    </div>
  </section>
</template>
