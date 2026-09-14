<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'
import logoCentro from '@/assets/images/logo-centro.jpg'
import studioImage from '@/assets/images/studio-forense.jpg'

const scrolled = ref(false)

function onScroll() {
  scrolled.value = window.scrollY > 24
}

onMounted(() => {
  onScroll()
  window.addEventListener('scroll', onScroll, { passive: true })
})

onUnmounted(() => {
  window.removeEventListener('scroll', onScroll)
})
</script>

<template>
  <div class="layout">
    <header class="nav" :class="{ 'nav--solid': scrolled }">
      <div class="container nav__inner">
        <a href="#inicio" class="nav__brand">
          <img
            class="nav__logo"
            :src="logoCentro"
            alt="Centro de Estudios y Evaluaciones Forenses"
            width="64"
            height="64"
          />
          <span class="nav__brand-text">
            Centro de Evaluaciones
            <em>Forenses</em>
          </span>
        </a>

        <nav class="nav__links" aria-label="Principal">
          <a href="#presentacion">Presentación</a>
          <a href="#valores">Valores</a>
          <a href="#servicios">Servicios</a>
          <a href="#confianza">Confianza</a>
        </nav>

        <a class="btn btn--primary nav__cta" href="#contacto">Contacto</a>
      </div>
    </header>

    <main class="main">
      <div class="main__atmosphere" aria-hidden="true">
        <img
          class="main__atmosphere-image"
          :src="studioImage"
          alt=""
          width="1920"
          height="1080"
        />
        <div class="main__atmosphere-veil" />
      </div>
      <div class="main__content">
        <RouterView />
      </div>
    </main>

    <footer id="contacto" class="footer">
      <div class="container footer__grid">
        <div>
          <p class="footer__brand">Centro de Evaluaciones Forenses</p>
          <p class="footer__expert">Marta Vidal Parra Perito Judicial Especialidad Asistente Social</p>
          <p class="footer__copy">
            Evaluación técnica, rigor metodológico y compromiso ético al servicio de la verdad.
          </p>
        </div>
      </div>
      <div class="container footer__bottom">
        <p>© {{ new Date().getFullYear() }} Centro de Evaluaciones Forenses · Marta Vidal Parra</p>
      </div>
    </footer>
  </div>
</template>

<style scoped>
.layout {
  min-height: 100vh;
}

.main {
  position: relative;
  isolation: isolate;
}

.main__atmosphere {
  position: fixed;
  inset: 0;
  z-index: 0;
  pointer-events: none;
  overflow: hidden;
}

.main__atmosphere-image {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center 40%;
  transform: scale(1.03);
}

.main__atmosphere-veil {
  position: absolute;
  inset: 0;
  background:
    linear-gradient(
      to bottom,
      rgba(10, 12, 14, 1) 0%,
      rgba(10, 12, 14, 0.88) 8%,
      rgba(10, 12, 14, 0.55) 22%,
      rgba(10, 12, 14, 0.35) 38%,
      transparent 55%
    ),
    linear-gradient(90deg, rgba(10, 12, 14, 0.82) 0%, rgba(10, 12, 14, 0.58) 48%, rgba(10, 12, 14, 0.7) 100%),
    linear-gradient(0deg, rgba(10, 12, 14, 0.78) 0%, rgba(10, 12, 14, 0.42) 45%, rgba(10, 12, 14, 0.62) 100%);
}

.main__content {
  position: relative;
  z-index: 1;
}

.nav {
  position: fixed;
  inset: 0 0 auto;
  z-index: 40;
  height: var(--nav-height);
  color: #fff;
  transition:
    background-color 280ms ease,
    color 280ms ease,
    box-shadow 280ms ease,
    backdrop-filter 280ms ease;
}

.nav--solid {
  color: var(--color-ink);
  background: rgba(247, 243, 237, 0.94);
  box-shadow: 0 1px 0 rgba(122, 101, 76, 0.18);
  backdrop-filter: blur(10px);
}

.nav__inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  height: 100%;
}

.nav__brand {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  min-width: 0;
}

.nav__logo {
  width: 2.75rem;
  height: 2.75rem;
  flex-shrink: 0;
  border-radius: 50%;
  object-fit: cover;
  background: #0a0a0a;
}

.nav__brand-text {
  display: flex;
  flex-direction: column;
  font-size: 0.72rem;
  font-weight: 500;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  line-height: 1.25;
}

.nav__brand-text em {
  font-style: normal;
  font-family: var(--font-display);
  font-size: 1.05rem;
  font-weight: 600;
  letter-spacing: 0.02em;
  text-transform: none;
}

.nav__links {
  display: none;
  gap: 1.5rem;
  font-size: 0.82rem;
  font-weight: 500;
  letter-spacing: 0.04em;
}

.nav__links a {
  opacity: 0.86;
  transition: opacity 180ms ease;
}

.nav__links a:hover {
  opacity: 1;
}

.nav__cta {
  flex-shrink: 0;
}

.nav--solid .nav__cta {
  background: var(--color-ink);
  color: #fff;
}

.footer {
  position: relative;
  z-index: 1;
  padding-block: var(--space-xl) var(--space-lg);
  background: var(--color-ink);
  color: rgba(255, 255, 255, 0.78);
}

.footer__grid {
  display: grid;
  gap: var(--space-lg);
}

.footer__brand {
  margin-bottom: 0.35rem;
  color: #fff;
  font-family: var(--font-display);
  font-size: 1.6rem;
  font-weight: 600;
}

.footer__expert {
  margin-bottom: 0.75rem;
  color: rgba(255, 255, 255, 0.72);
  font-family: var(--font-display);
  font-size: 1.15rem;
  font-weight: 500;
  letter-spacing: 0.02em;
}

.footer__copy {
  max-width: 28rem;
  line-height: 1.7;
}

.footer__bottom {
  margin-top: var(--space-xl);
  padding-top: var(--space-md);
  border-top: 1px solid rgba(255, 255, 255, 0.12);
  font-size: 0.85rem;
  color: rgba(255, 255, 255, 0.45);
}

@media (min-width: 900px) {
  .nav__links {
    display: flex;
  }

  .footer__grid {
    grid-template-columns: 1.4fr 1fr 1fr;
  }
}

@media (max-width: 640px) {
  .nav__brand-text {
    display: none;
  }
}
</style>
