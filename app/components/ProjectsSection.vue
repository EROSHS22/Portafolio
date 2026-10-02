<script setup lang="ts">
import { projects } from '~/data/projects'
</script>

<template>
  <section
    id="proyectos"
    aria-labelledby="proyectos-title"
    class="mt-[120px] scroll-mt-8"
  >
    <h2
      id="proyectos-title"
      class="mx-auto mb-12 max-w-7xl px-4 font-sans text-[clamp(0.75rem,1.2vw,0.875rem)] uppercase tracking-[0.14em] text-brutal-muted md:px-8"
    >
      &gt; EJECUCIÓN TÉCNICA
    </h2>

    <ol
      role="list"
      class="mx-auto flex max-w-7xl flex-col gap-20 px-4 md:gap-28 md:px-8"
    >
      <li v-for="(project, index) in projects" :key="project.id">
        <ProjectCard :project="project" :flip="index % 2 === 1" />
      </li>
    </ol>
  </section>
</template>
