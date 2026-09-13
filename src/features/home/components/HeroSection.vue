<script setup lang="ts">
import heroImage from '@/assets/images/hero-profesional3.jpeg'
</script>

<template>
  <section id="inicio" class="hero" aria-label="Presentación principal">
    <div class="hero__media">
      <img
        class="hero__image"
        :src="heroImage"
        alt="Profesional del Centro de Evaluaciones Forenses Amor en su espacio de trabajo"
        width="1024"
        height="873"
      />
      <div class="hero__veil" aria-hidden="true" />
    </div>

    <div class="hero__content">
      <p class="hero__brand reveal">Centro de Evaluaciones Forenses Amor</p>
      <h1 class="hero__title reveal reveal--delay-1">
        Rigor técnico al servicio de la verdad
      </h1>
      <p class="hero__lead reveal reveal--delay-2">
        Asistente Social, Magíster en Psicología Jurídica e Intervención
        Psicosocial, mención Mediación Familiar y Penal. Perito acreditada ante
        las Cortes de Apelaciones de Chile.
      </p>
      <div class="hero__actions reveal reveal--delay-3">
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
}

.hero__image {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center 22%;
  transform: scale(1.04);
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

.hero__content {
  position: relative;
  z-index: 1;
  max-width: 40rem;
  padding-block: calc(var(--nav-height) + 4rem) 4.5rem;
  margin-inline: auto 0;
  margin-left: max(1.25rem, calc((100% - var(--max-width)) / 2 + 1.25rem));
}

.hero__brand {
  margin-bottom: 1rem;
  font-family: var(--font-display);
  font-size: clamp(1.35rem, 2.4vw, 1.85rem);
  font-weight: 600;
  letter-spacing: 0.01em;
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

/* Mobile: imagen arriba + texto debajo, sin hueco negro */
@media (max-width: 720px) {
  .hero {
    display: flex;
    flex-direction: column;
    align-items: stretch;
    min-height: 0;
  }

  .hero__media {
    position: relative;
    inset: auto;
    width: 100%;
    height: clamp(15rem, 58vw, 22rem);
    flex-shrink: 0;
  }

  .hero__image {
    transform: none;
    animation: none;
    object-position: center 18%;
  }

  .hero__veil {
    background:
      linear-gradient(0deg, rgba(10, 12, 14, 0.35) 0%, rgba(10, 12, 14, 0.15) 45%, rgba(10, 12, 14, 0.28) 100%);
  }

  .hero__content {
    width: 100%;
    max-width: none;
    margin: 0;
    padding: 1.5rem 1.25rem 2rem;
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
