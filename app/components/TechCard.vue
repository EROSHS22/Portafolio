<script setup lang="ts">
interface Props {
  category: string
  name: string
  icon: string
  alt: string
}

defineProps<Props>()
</script>

<template>
  <li
    class="tech-card flex flex-col items-center gap-4 border border-brutal-edge bg-brutal-bg p-5 transition-colors duration-200 ease-out hover:border-brutal-accent/50 motion-reduce:transition-none"
  >
    <span
      class="tech-card__label text-center text-[clamp(0.625rem,1vw,0.75rem)] uppercase tracking-[0.12em] text-brutal-edge transition-colors duration-200 ease-out hover:text-brutal-accent/50 motion-reduce:transition-none"
    >
      [ {{ category }}: {{ name }} ]
    </span>

    <span
      class="tech-card__frame flex w-[clamp(3.5rem,7vw,6rem)] items-center justify-center bg-brutal-bg p-2"
    >
      <img
        class="tech-card__icon h-full w-full object-contain"
        :src="icon"
        :alt="alt"
        width="261"
        height="261"
        loading="lazy"
        decoding="async"
      />
    </span>
  </li>
</template>
