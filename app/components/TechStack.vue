<script setup lang="ts">
import { techStack } from '~/data/stack'
</script>

<template>
  <section aria-labelledby="stack-title" class="mt-[120px]">
    <h2 id="stack-title" class="sr-only">Stack tecnológico</h2>

    <ul
      class="tech-grid mx-auto grid max-w-7xl grid-cols-2 gap-4 px-4 md:px-8 lg:grid-cols-4 lg:gap-6"
    >
      <TechCard v-for="tech in techStack" :key="tech.name" v-bind="tech" />
    </ul>
  </section>
</template>
