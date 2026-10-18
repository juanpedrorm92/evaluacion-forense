<script setup lang="ts">
import { onMounted, ref } from 'vue'

const loaded = ref(false)
const imgRef = ref<HTMLImageElement | null>(null)

onMounted(() => {
  const img = imgRef.value
  if (img?.complete && img.naturalWidth > 0) {
    loaded.value = true
  }
})

function onLoad() {
  loaded.value = true
}
</script>

<template>
  <section id="inicio" class="hero" aria-label="Presentación principal">
    <div class="hero__media">
      <picture>
        <source
          type="image/webp"
          srcset="
            /images/hero-800.webp 800w,
            /images/hero-1200.webp 1200w,
            /images/hero-1600.webp 1600w
          "
          sizes="100vw"
        />
        <img
          ref="imgRef"
          class="hero__image"
          :class="{ 'hero__image--ready': loaded }"
          src="/images/hero-1200.jpg"
          srcset="
            /images/hero-800.jpg 800w,
            /images/hero-1200.jpg 1200w,
            /images/hero-1600.jpg 1600w
          "
          sizes="100vw"
          width="1584"
          height="672"
          alt="Profesional del Centro de Evaluaciones Forenses en su espacio de trabajo"
          fetchpriority="high"
          decoding="async"
          @load="onLoad"
        />
      </picture>
      <div class="hero__veil" aria-hidden="true" />
      <div class="hero__fog" aria-hidden="true" />
    </div>

    <div class="hero__content">
      <p class="hero__brand reveal">Centro de Evaluaciones Forenses</p>
      <p class="hero__expert reveal reveal--delay-1">Perito Judicial, Marta Vidal Parra</p>
      <h1 class="hero__title reveal reveal--delay-2">
        Rigor técnico al servicio de la verdad
      </h1>
      <p class="hero__lead reveal reveal--delay-3">
        Asistente Social, Magíster en Psicología Jurídica e Intervención
        Psicosocial, mención Mediación Familiar y Penal. Perito acreditada ante
        las Cortes de Apelaciones de Chile.
      </p>
      <div class="hero__actions reveal reveal--delay-4">
        <a class="btn btn--primary" href="#presentacion">Conocer el centro</a>
        <a class="btn btn--ghost" href="#servicios">Ver servicios</a>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero {
  position: relative;
  display: grid;
  align-items: end;
  min-height: 100svh;
  overflow: hidden;
  color: #fff;
  background: var(--color-ink);
}

.hero__media {
  position: absolute;
  inset: 0;
  /* Placeholder difuminado mientras llega la imagen real */
  background-color: #1a1612;
  background-image: url('data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAAOACADASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAABQME/8QAJxAAAgEDAgMJAAAAAAAAAAAAAQIDAAQRITEFEhMiMlFhYnGBwdH/xAAWAQEBAQAAAAAAAAAAAAAAAAABAgP/xAAYEQACAwAAAAAAAAAAAAAAAAAAAQIRIf/aAAwDAQACEQMRAD8AeaWI8Th1ODE4281oC+uzFxKVXbsSSgBRudvqt1wiSSk6g8jDGdgSPyhZ7CSWYuJj0ockA94ex8aJWMVpQJDd3jnnZpYgVaPl3AON/mkel1o1MiSj0nXFDo4E4MaqjMcFgNdTSSLcICHnYkbEGoeGiVn/2Q==');
  background-size: cover;
  background-position: center 22%;
}

.hero__media picture,
.hero__image {
  display: block;
  width: 100%;
  height: 100%;
}

.hero__image {
  object-fit: cover;
  object-position: center 22%;
  transform: scale(1.04);
  opacity: 0;
  transition: opacity 480ms var(--ease-out);
  animation: none;
}

.hero__image--ready {
  opacity: 1;
  animation: hero-zoom 8s var(--ease-out) forwards;
}

.hero__veil {
  position: absolute;
  inset: 0;
  background:
    linear-gradient(90deg, rgba(10, 12, 14, 0.78) 0%, rgba(10, 12, 14, 0.42) 48%, rgba(10, 12, 14, 0.28) 100%),
    linear-gradient(0deg, rgba(10, 12, 14, 0.72) 0%, rgba(10, 12, 14, 0.18) 45%, rgba(10, 12, 14, 0.35) 100%);
  pointer-events: none;
}

.hero__fog {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 2;
  height: clamp(8rem, 26vh, 16rem);
  pointer-events: none;
  background: linear-gradient(
    to bottom,
    rgba(10, 12, 14, 0) 0%,
    rgba(10, 12, 14, 0.18) 22%,
    rgba(10, 12, 14, 0.48) 48%,
    rgba(10, 12, 14, 0.78) 72%,
    rgba(10, 12, 14, 0.94) 90%,
    rgba(10, 12, 14, 1) 100%
  );
}

.hero__content {
  position: relative;
  z-index: 3;
  max-width: 40rem;
  padding-block: calc(var(--nav-height) + 4rem) 5.5rem;
  margin-inline: auto 0;
  margin-left: max(1.25rem, calc((100% - var(--max-width)) / 2 + 1.25rem));
}

.hero__brand {
  margin-bottom: 0.45rem;
  font-family: var(--font-display);
  font-size: clamp(1.2rem, 2.2vw, 1.55rem);
  font-weight: 600;
  letter-spacing: 0.01em;
  color: rgba(255, 255, 255, 0.88);
}

.hero__expert {
  margin-bottom: 1rem;
  font-family: var(--font-display);
  font-size: clamp(1.55rem, 3vw, 2.15rem);
  font-weight: 600;
  letter-spacing: 0.01em;
  line-height: 1.15;
}

.hero__title {
  max-width: 14ch;
  font-size: clamp(2.2rem, 6vw, 4.4rem);
  font-weight: 600;
  line-height: 1.05;
}

.hero__lead {
  max-width: 34rem;
  margin-top: 1.25rem;
  color: rgba(255, 255, 255, 0.86);
  font-size: clamp(0.95rem, 1.5vw, 1.15rem);
  line-height: 1.7;
}

.hero__actions {
  display: flex;
  flex-wrap: wrap;
  gap: 0.85rem;
  margin-top: 2rem;
}

.reveal {
  opacity: 0;
  transform: translateY(18px);
  animation: reveal-up var(--duration) var(--ease-out) forwards;
}

.reveal--delay-1 {
  animation-delay: 140ms;
}

.reveal--delay-2 {
  animation-delay: 260ms;
}

.reveal--delay-3 {
  animation-delay: 380ms;
}

.reveal--delay-4 {
  animation-delay: 500ms;
}

@keyframes reveal-up {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes hero-zoom {
  to {
    transform: scale(1);
  }
}

@media (prefers-reduced-motion: reduce) {
  .hero__image,
  .hero__image--ready {
    transform: none;
    animation: none;
    transition: opacity 200ms ease;
  }

  .reveal {
    opacity: 1;
    transform: none;
    animation: none;
  }
}

/* Mobile: imagen arriba + texto debajo, sin hueco negro */
@media (max-width: 720px) {
  .hero {
    display: flex;
    flex-direction: column;
    align-items: stretch;
    min-height: 0;
  }

  .hero::after {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 4;
    height: 5.5rem;
    pointer-events: none;
    background: linear-gradient(
      to bottom,
      rgba(10, 12, 14, 0) 0%,
      rgba(10, 12, 14, 0.55) 45%,
      rgba(10, 12, 14, 0.92) 80%,
      rgba(10, 12, 14, 1) 100%
    );
  }

  .hero__media {
    position: relative;
    inset: auto;
    width: 100%;
    height: clamp(15rem, 58vw, 22rem);
    flex-shrink: 0;
    background-position: center 18%;
  }

  .hero__image {
    transform: none;
    animation: none;
    object-position: center 18%;
  }

  .hero__image--ready {
    animation: none;
  }

  .hero__veil {
    background:
      linear-gradient(0deg, rgba(10, 12, 14, 0.35) 0%, rgba(10, 12, 14, 0.15) 45%, rgba(10, 12, 14, 0.28) 100%);
  }

  .hero__fog {
    height: 4rem;
  }

  .hero__content {
    width: 100%;
    max-width: none;
    margin: 0;
    padding: 1.5rem 1.25rem 3.25rem;
    background: var(--color-ink);
  }

  .hero__title {
    font-size: clamp(1.9rem, 8vw, 2.6rem);
  }

  .hero__actions {
    flex-direction: column;
    align-items: stretch;
  }

  .hero__actions .btn {
    width: 100%;
  }
}
</style>
