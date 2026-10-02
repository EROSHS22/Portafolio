<script setup lang="ts">
import type { GithubProfile } from '~/composables/useGithubProfile'

const props = defineProps<{ profile: GithubProfile }>()

// GitHub permite pedir el avatar en cualquier tamaño con ?s=
const sized = (px: number) => {
  const { avatarUrl } = props.profile
  return `${avatarUrl}${avatarUrl.includes('?') ? '&' : '?'}s=${px}`
}

const bar = (percent: number) => {
  const filled = Math.round(percent / 10)
  return '█'.repeat(filled) + '░'.repeat(10 - filled)
}
</script>

<template>
  <article
    class="group/gh rounded-md border border-brutal-muted/30 bg-[#161616] p-5 md:p-6"
    aria-labelledby="gh-name"
  >
    <p
      class="font-sans text-[0.6875rem] uppercase tracking-[0.1em] text-brutal-muted"
    >
      [ GitHub: @{{ profile.login }} ]
    </p>

    <div class="mt-5 flex items-center gap-5">
      <!--
        Avatar pixel-art: se pide a 48px y se escala sin suavizar.
        Al pasar el mouse (o en táctil) se muestra la versión nítida encima.
      -->
      <div
        class="relative h-24 w-24 shrink-0 overflow-hidden rounded-md border border-brutal-text/80 bg-[#1A1A1A] md:h-28 md:w-28"
      >
        <img
          :src="sized(48)"
          alt=""
          width="48"
          height="48"
          class="h-full w-full object-cover [image-rendering:pixelated]"
        />
        <img
          :src="sized(224)"
          :alt="`Foto de perfil de ${profile.name} en GitHub`"
          width="224"
          height="224"
          loading="lazy"
          decoding="async"
          class="absolute inset-0 h-full w-full object-cover opacity-0 transition-opacity duration-300 motion-reduce:transition-none [@media(hover:hover)]:group-focus-within/gh:opacity-100 [@media(hover:hover)]:group-hover/gh:opacity-100 [@media(hover:none)]:opacity-100"
        />
      </div>

      <div class="min-w-0">
        <h4
          id="gh-name"
          class="font-heading text-[clamp(1.25rem,2.4vw,1.625rem)] uppercase leading-[1.15] tracking-[0.05em] text-brutal-text"
        >
          {{ profile.name }}
        </h4>
        <p
          v-if="profile.location"
          class="mt-1 font-sans text-xs text-brutal-muted"
        >
          {{ profile.location }}
        </p>
      </div>
    </div>

    <p
      class="mt-5 max-w-[46ch] font-sans text-[0.8125rem] leading-[1.9] text-brutal-muted md:text-sm"
    >
      {{ profile.bio ?? 'Construyo software vivo.' }}
    </p>

    <dl
      class="mt-6 grid grid-cols-3 gap-3 border-y border-brutal-muted/30 py-4 font-sans"
    >
      <div>
        <dt
          class="text-[0.6875rem] uppercase tracking-[0.1em] text-brutal-muted"
        >
          Repos
        </dt>
        <dd class="mt-1 text-lg text-brutal-text">{{ profile.publicRepos }}</dd>
      </div>
      <div>
        <dt
          class="text-[0.6875rem] uppercase tracking-[0.1em] text-brutal-muted"
        >
          Seguidores
        </dt>
        <dd class="mt-1 text-lg text-brutal-text">{{ profile.followers }}</dd>
      </div>
      <div>
        <dt
          class="text-[0.6875rem] uppercase tracking-[0.1em] text-brutal-muted"
        >
          Desde
        </dt>
        <dd class="mt-1 text-lg text-brutal-text">{{ profile.sinceYear }}</dd>
      </div>
    </dl>

    <div v-if="profile.languages.length" class="mt-6">
      <h5
        class="font-sans text-[0.6875rem] uppercase tracking-[0.1em] text-brutal-muted"
      >
        Lenguajes
      </h5>
      <ul role="list" class="mt-3 flex flex-col gap-1.5 font-sans text-xs">
        <li
          v-for="lang in profile.languages"
          :key="lang.name"
          class="flex items-center gap-3 text-brutal-text"
        >
          <span aria-hidden="true" class="tracking-[0.05em] text-brutal-accent">
            {{ bar(lang.percent) }}
          </span>
          <span>{{ lang.name }} {{ lang.percent }}%</span>
        </li>
      </ul>
    </div>

    <div v-if="profile.recentRepos.length" class="mt-6">
      <h5
        class="font-sans text-[0.6875rem] uppercase tracking-[0.1em] text-brutal-muted"
      >
        Último movimiento
      </h5>
      <ol role="list" class="mt-3 flex flex-col gap-2 font-sans text-xs">
        <li
          v-for="repo in profile.recentRepos"
          :key="repo.name"
          class="flex flex-wrap items-baseline justify-between gap-x-3"
        >
          <a
            :href="repo.url"
            target="_blank"
            rel="noopener noreferrer"
            class="text-brutal-text underline-offset-4 hover:text-brutal-accent hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brutal-accent"
          >
            {{ repo.name }}
          </a>
          <span class="text-brutal-muted">
            {{ repo.language ?? 'varios' }} · {{ repo.pushedAgo }}
          </span>
        </li>
      </ol>
    </div>

    <a
      :href="profile.url"
      target="_blank"
      rel="noopener noreferrer"
      class="mt-6 inline-flex min-h-11 items-center rounded-md border border-brutal-text px-5 py-2.5 font-sans text-xs font-bold uppercase tracking-[0.12em] text-brutal-text transition-[transform,border-color,color] duration-200 ease-out hover:-translate-y-0.5 hover:border-brutal-accent hover:text-brutal-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brutal-accent motion-reduce:transform-none motion-reduce:transition-none"
    >
      Ver perfil en GitHub
    </a>
  </article>
</template>
