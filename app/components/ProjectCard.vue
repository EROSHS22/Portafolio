<script setup lang="ts">
import type { Project } from '~/data/projects'

interface Props {
  project: Project
  flip?: boolean
}

withDefaults(defineProps<Props>(), { flip: false })
</script>

<template>
  <article
    class="group/card grid grid-cols-1 items-center gap-6 md:grid-cols-2 md:gap-10 lg:gap-14"
  >
    <div
      class="flex flex-col items-start gap-5"
      :class="flip ? 'md:order-2' : 'md:order-1'"
    >
      <h3
        class="font-heading text-[clamp(1.375rem,2.6vw,2rem)] uppercase leading-[1.15] tracking-[0.05em] text-brutal-text"
      >
        {{ project.title }}
      </h3>

      <p
        class="max-w-[46ch] font-sans text-[0.8125rem] leading-[1.9] text-brutal-muted md:text-sm"
      >
        {{ project.description }}
      </p>

      <ul
        class="flex flex-wrap items-center gap-x-3 gap-y-2 font-sans text-[0.6875rem] uppercase tracking-[0.1em] text-brutal-muted"
        aria-label="Tecnologías"
        role="list"
      >
        <li v-for="tag in project.tags" :key="tag">
          <span aria-hidden="true">[</span> {{ tag }}
          <span aria-hidden="true">]</span>
        </li>
      </ul>

      <a
        :href="project.url"
        :aria-label="`Ver plataforma: ${project.title}`"
        target="_blank"
        rel="noopener noreferrer"
        class="inline-flex min-h-11 items-center rounded-md border border-brutal-text px-5 py-2.5 font-sans text-xs font-bold uppercase tracking-[0.12em] text-brutal-text transition-[transform,border-color,color] duration-200 ease-out hover:-translate-y-0.5 hover:border-brutal-accent hover:text-brutal-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brutal-accent motion-reduce:transform-none motion-reduce:transition-none"
      >
        Ver plataforma
      </a>
    </div>

    <div
      class="group/media relative aspect-[3/2] overflow-hidden rounded-md bg-[#1A1A1A] after:pointer-events-none after:absolute after:inset-0 after:bg-black/70 after:opacity-0 after:transition-opacity after:duration-300 after:content-[''] motion-reduce:after:transition-none [@media(hover:hover)]:after:opacity-100 [@media(hover:hover)]:hover:after:opacity-0 [@media(hover:hover)]:group-focus-within/card:after:opacity-0"
      :class="flip ? 'md:order-1' : 'md:order-2'"
    >
      <img
        :src="project.image.src"
        :alt="project.image.alt"
        :width="project.image.width"
        :height="project.image.height"
        sizes="(min-width: 768px) 50vw, 100vw"
        loading="lazy"
        decoding="async"
        class="h-full w-full object-cover transition-[filter] duration-300 motion-reduce:transition-none [@media(hover:hover)]:grayscale [@media(hover:hover)]:group-focus-within/card:grayscale-0 [@media(hover:hover)]:group-hover/media:grayscale-0"
      />
    </div>
  </article>
</template>
