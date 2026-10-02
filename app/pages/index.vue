<template>
  <section aria-labelledby="hero-title" class="border-x border-brutal-surface">
    <div
      class="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-4 py-12 md:px-8 md:py-20 lg:grid-cols-12"
    >
      <div class="flex flex-col gap-8 lg:col-span-6">
        <h1
          id="hero-title"
          class="font-heading text-[clamp(2.5rem,7vw,5.5rem)] font-bold uppercase leading-none text-brutal-text"
        >
          Pindaro Heras
        </h1>

        <p class="font-sans text-base text-brutal-accent md:text-lg">
          &gt; Ingeniero en sistemas computacionales
        </p>

        <p
          class="max-w-xl font-sans text-sm leading-relaxed text-brutal-text md:text-base"
        >
          Estructura rígida para el sistema,<br />
          adaptabilidad orgánica para la interfaz.<br />
          Construyo software vivo.
        </p>

        <div class="flex flex-wrap items-center gap-4 pt-4">
          <a
            href="#proyectos"
            class="inline-flex min-h-11 items-center rounded-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brutal-accent motion-safe:transition-transform motion-safe:hover:-translate-y-0.5"
          >
            <picture>
              <source type="image/webp" srcset="/img/btn-proyectos.webp" />
              <img
                src="/img/btn-proyectos.webp"
                alt="Ver proyectos"
                width="505"
                height="167"
                loading="lazy"
                class="h-auto w-[200px]"
              />
            </picture>
          </a>

          <a
            href="https://github.com/EROSHS22"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex min-h-11 items-center rounded-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brutal-accent motion-safe:transition-transform motion-safe:hover:-translate-y-0.5"
          >
            <picture>
              <source type="image/webp" srcset="/img/btn-github.webp" />
              <img
                src="/img/btn-github.webp"
                alt="Perfil de GitHub"
                width="505"
                height="167"
                loading="lazy"
                class="h-auto w-[200px]"
              />
            </picture>
          </a>
        </div>
      </div>

      <div class="lg:col-span-6">
        <div class="flex w-full items-center justify-center">
          <picture>
            <source type="image/webp" srcset="/img/monitor.webp" />
            <img
              src="/img/monitor.webp"
              alt="Terminal con un conflicto de merge en código C++ del que brota una pequeña planta"
              width="507"
              height="373"
              loading="eager"
              fetchpriority="high"
              sizes="(min-width: 1024px) 48vw, 100vw"
              class="h-auto w-full object-contain"
            />
          </picture>
        </div>
      </div>
    </div>
  </section>

  <TechStack />
  <ProjectsSection />
</template>
