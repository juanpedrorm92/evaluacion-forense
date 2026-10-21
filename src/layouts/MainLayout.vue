<script setup lang="ts">
import { onMounted, onUnmounted, ref, watch } from 'vue'
import logoCentro from '@/assets/images/logo-centro.jpg'
import studioImage from '@/assets/images/studio-forense.jpg'
import { contact, whatsappHref } from '@/features/home/siteContent'

const scrolled = ref(false)
const menuOpen = ref(false)

const navItems = [
  { href: '#presentacion', label: 'Presentación' },
  { href: '#servicios', label: 'Servicios' },
  { href: '#formacion', label: 'Formación' },
  { href: '#contacto', label: 'Solicita cotización' },
]

function onScroll() {
  scrolled.value = window.scrollY > 24
}

function toggleMenu() {
  menuOpen.value = !menuOpen.value
}

function closeMenu() {
  menuOpen.value = false
}

function onKeydown(event: KeyboardEvent) {
  if (event.key === 'Escape') closeMenu()
}

watch(menuOpen, (open) => {
  document.body.style.overflow = open ? 'hidden' : ''
})

onMounted(() => {
  onScroll()
  window.addEventListener('scroll', onScroll, { passive: true })
  window.addEventListener('keydown', onKeydown)
})

onUnmounted(() => {
  window.removeEventListener('scroll', onScroll)
  window.removeEventListener('keydown', onKeydown)
  document.body.style.overflow = ''
})
</script>

<template>
  <div class="layout">
    <header class="nav" :class="{ 'nav--solid': scrolled, 'nav--menu-open': menuOpen }">
      <div class="container nav__inner">
        <a href="#inicio" class="nav__brand" @click="closeMenu">
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
          <a href="#servicios">Servicios</a>
          <a href="#formacion">Formación</a>
        </nav>

        <a class="btn btn--primary nav__cta" href="#contacto">Cotizar</a>

        <button
          type="button"
          class="nav__burger"
          :aria-expanded="menuOpen"
          aria-controls="menu-movil"
          :aria-label="menuOpen ? 'Cerrar menú' : 'Abrir menú'"
          @click="toggleMenu"
        >
          <span class="nav__burger-line" aria-hidden="true" />
          <span class="nav__burger-line" aria-hidden="true" />
          <span class="nav__burger-line" aria-hidden="true" />
        </button>
      </div>
    </header>

    <div
      class="nav__backdrop"
      :class="{ 'nav__backdrop--open': menuOpen }"
      aria-hidden="true"
      @click="closeMenu"
    />

    <nav
      id="menu-movil"
      class="nav__drawer"
      :class="{ 'nav__drawer--open': menuOpen }"
      aria-label="Menú móvil"
      :aria-hidden="!menuOpen"
    >
      <a
        v-for="item in navItems"
        :key="item.href"
        :href="item.href"
        class="nav__drawer-link"
        @click="closeMenu"
      >
        {{ item.label }}
      </a>
    </nav>

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

    <a
      class="whatsapp"
      :href="whatsappHref()"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Escribir por WhatsApp"
    >
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path
          fill="currentColor"
          d="M12.04 2C6.58 2 2.15 6.4 2.15 11.83c0 1.74.46 3.44 1.34 4.94L2 22l5.39-1.4a10 10 0 0 0 4.65 1.18h.01c5.46 0 9.89-4.4 9.89-9.83C21.94 6.4 17.5 2 12.04 2zm5.76 14.04c-.24.68-1.4 1.3-1.94 1.38-.5.08-1.12.11-1.81-.11-.42-.14-.95-.31-1.64-.61-2.88-1.24-4.76-4.14-4.9-4.33-.14-.19-1.16-1.54-1.16-2.94s.73-2.08 1-2.37c.24-.28.64-.41 1.02-.41.12 0 .23 0 .33.01.3.01.44-.02.68.52.24.58.83 2 .9 2.15.07.14.12.31.02.5-.09.19-.14.31-.28.48-.14.16-.29.36-.42.49-.14.14-.28.28-.12.55.16.26.71 1.17 1.53 1.9 1.05.94 1.94 1.23 2.21 1.37.28.14.44.12.6-.07.16-.19.7-.81.88-1.09.19-.28.37-.23.62-.14.26.09 1.62.76 1.9.9.28.14.46.21.53.33.07.12.07.68-.17 1.36z"
        />
      </svg>
    </a>

    <footer class="footer">
      <div class="container footer__grid">
        <div>
          <p class="footer__brand">Centro de Evaluaciones Forenses</p>
          <p class="footer__expert">Marta Vidal Parra · Perito judicial · Asistente Social</p>
          <p class="footer__copy">
            Evaluaciones periciales en causas de familia, penal, civil y laboral.
          </p>
        </div>
        <div>
          <p class="footer__label">Contacto</p>
          <a class="footer__link" :href="`tel:${contact.phoneTel}`">Teléfono {{ contact.phoneDisplay }}</a>
          <a class="footer__link" :href="whatsappHref()" target="_blank" rel="noopener noreferrer">WhatsApp {{ contact.whatsappDisplay }}</a>
          <a class="footer__link" :href="`mailto:${contact.email}`">{{ contact.email }}</a>
        </div>
        <div>
          <p class="footer__label">Atención</p>
          <p class="footer__detail">{{ contact.hours }}</p>
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

.nav--solid,
.nav--menu-open {
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
  display: none;
  flex-shrink: 0;
}

.nav--solid .nav__cta {
  background: var(--color-ink);
  color: #fff;
}

.nav__burger {
  display: grid;
  gap: 5px;
  width: 2.5rem;
  height: 2.5rem;
  place-content: center;
  padding: 0;
  border: 1px solid rgba(255, 255, 255, 0.35);
  background: rgba(10, 12, 14, 0.28);
  color: inherit;
  cursor: pointer;
  backdrop-filter: blur(6px);
  transition:
    background-color 200ms ease,
    border-color 200ms ease;
}

.nav--solid .nav__burger,
.nav--menu-open .nav__burger {
  border-color: rgba(122, 101, 76, 0.28);
  background: rgba(247, 243, 237, 0.7);
}

.nav__burger-line {
  display: block;
  width: 1.15rem;
  height: 1.5px;
  background: currentColor;
  transition:
    transform 220ms ease,
    opacity 180ms ease;
}

.nav--menu-open .nav__burger-line:nth-child(1) {
  transform: translateY(6.5px) rotate(45deg);
}

.nav--menu-open .nav__burger-line:nth-child(2) {
  opacity: 0;
}

.nav--menu-open .nav__burger-line:nth-child(3) {
  transform: translateY(-6.5px) rotate(-45deg);
}

.nav__backdrop {
  position: fixed;
  inset: 0;
  z-index: 35;
  background: rgba(10, 12, 14, 0.45);
  opacity: 0;
  pointer-events: none;
  transition: opacity 240ms ease;
}

.nav__backdrop--open {
  opacity: 1;
  pointer-events: auto;
}

.nav__drawer {
  position: fixed;
  top: var(--nav-height);
  right: 0;
  z-index: 36;
  display: grid;
  gap: 0.25rem;
  width: min(100%, 18rem);
  padding: 1.25rem 1.35rem 1.5rem;
  background: rgba(247, 243, 237, 0.97);
  color: var(--color-ink);
  border-left: 1px solid rgba(122, 101, 76, 0.16);
  box-shadow: -12px 16px 40px rgba(18, 14, 10, 0.18);
  transform: translateX(104%);
  transition: transform 280ms var(--ease-out);
}

.nav__drawer--open {
  transform: translateX(0);
}

.nav__drawer-link {
  display: block;
  padding: 0.85rem 0.35rem;
  border-bottom: 1px solid rgba(122, 101, 76, 0.12);
  font-family: var(--font-display);
  font-size: 1.35rem;
  font-weight: 600;
  letter-spacing: 0.01em;
}

.nav__drawer-link:last-child {
  border-bottom: none;
  margin-top: 0.35rem;
  color: var(--color-wood-deep);
}

.footer {
  position: relative;
  z-index: 1;
  padding-block: var(--space-xl) calc(var(--space-lg) + 4.5rem);
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

.footer__label {
  margin-bottom: 0.65rem;
  color: rgba(255, 255, 255, 0.5);
  font-size: 0.72rem;
  font-weight: 600;
  letter-spacing: 0.14em;
  text-transform: uppercase;
}

.footer__link,
.footer__detail {
  display: block;
  margin-top: 0.35rem;
  line-height: 1.5;
}

.footer__link:hover {
  color: #fff;
}

.whatsapp {
  position: fixed;
  right: 1.15rem;
  bottom: 1.15rem;
  z-index: 30;
  display: grid;
  place-items: center;
  width: 3.5rem;
  height: 3.5rem;
  border-radius: 50%;
  background: #1f7a45;
  color: #fff;
}

.whatsapp:hover {
  background: #18663a;
}

.whatsapp svg {
  width: 1.7rem;
  height: 1.7rem;
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

  .nav__cta {
    display: inline-flex;
  }

  .nav__burger,
  .nav__backdrop,
  .nav__drawer {
    display: none;
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
