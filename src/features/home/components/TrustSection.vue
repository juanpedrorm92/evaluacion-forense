<script setup lang="ts">
import { ref } from 'vue'
import logoCentro from '@/assets/images/logo-centro.jpg'
import ContactEmailModal from './ContactEmailModal.vue'

const contactOpen = ref(false)

function openContactModal() {
  contactOpen.value = true
}
</script>

<template>
  <section id="confianza" class="section trust">
    <div class="container trust__panel">
      <div class="trust__intro">
        <div class="trust__copy">
          <p class="section__eyebrow trust__eyebrow">Compromiso institucional</p>
          <h2 class="section__title trust__title">Servicio profesional de calidad</h2>
          <p class="trust__lead">
            Brindar un servicio profesional de calidad, guiado por valores de
            integridad, ética, objetividad, responsabilidad y dedicación,
            permitiendo entregar un trabajo sólido que contribuya a los procesos
            judiciales seguidos en los distintos tribunales de nuestro país.
          </p>
        </div>

        <figure class="trust__logo-wrap">
          <img
            class="trust__logo"
            :src="logoCentro"
            alt="Logotipo del Centro de Estudios y Evaluaciones Forenses"
            width="320"
            height="320"
          />
        </figure>
      </div>

      <ul class="trust__points">
        <li>
          <strong>Integridad</strong>
          <span>Actuación coherente y transparente en cada etapa de la evaluación.</span>
        </li>
        <li>
          <strong>Ética</strong>
          <span>Resguardo de la confidencialidad, el respeto y los límites profesionales.</span>
        </li>
        <li>
          <strong>Objetividad</strong>
          <span>Análisis fundamentado, sin sesgos, al servicio de la verdad procesal.</span>
        </li>
        <li>
          <strong>Responsabilidad</strong>
          <span>Compromiso técnico con la calidad y la utilidad del informe pericial.</span>
        </li>
        <li>
          <strong>Dedicación</strong>
          <span>Atención cuidadosa a cada caso y a su impacto en el proceso judicial.</span>
        </li>
      </ul>

      <div class="trust__cta">
        <button type="button" class="btn btn--outline" @click="openContactModal">
          Solicitar una evaluación
        </button>
      </div>
    </div>

    <ContactEmailModal v-model="contactOpen" />
  </section>
</template>

<style scoped>
.trust {
  padding-block: var(--space-2xl);
}

.trust__panel {
  display: grid;
  gap: var(--space-xl);
  padding: clamp(1.75rem, 4vw, 3.5rem);
  background:
    linear-gradient(145deg, rgba(45, 69, 56, 0.08), transparent 42%),
    var(--color-surface);
  border: 1px solid var(--color-line);
}

.trust__intro {
  display: grid;
  gap: var(--space-lg);
  align-content: start;
  align-items: start;
}

.trust__eyebrow {
  color: var(--color-forest);
}

.trust__title {
  max-width: 16ch;
}

.trust__lead {
  max-width: 38rem;
  margin-top: var(--space-md);
  color: var(--color-muted);
  font-size: 1.08rem;
  line-height: 1.7;
}

.trust__logo-wrap {
  margin: 0;
  width: min(100%, 11rem);
  aspect-ratio: 1 / 1;
  justify-self: start;
}

.trust__logo {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: contain;
  object-position: center;
  border-radius: 50%;
}

.trust__points {
  display: grid;
  gap: var(--space-md);
  margin: 0;
  padding: 0;
  list-style: none;
}

.trust__points li {
  display: grid;
  gap: 0.35rem;
  padding-top: var(--space-md);
  border-top: 1px solid var(--color-line);
}

.trust__points strong {
  font-family: var(--font-display);
  font-size: 1.45rem;
  font-weight: 600;
}

.trust__points span {
  color: var(--color-muted);
}

@media (max-width: 899px) {
  .trust__logo-wrap {
    width: min(100%, 9.5rem);
    justify-self: center;
  }
}

@media (min-width: 900px) {
  .trust__panel {
    grid-template-columns: 1.1fr 0.9fr;
    align-items: start;
  }

  .trust__intro {
    min-width: 0;
  }

  .trust__logo-wrap {
    width: min(100%, 12rem);
    margin-top: 0.25rem;
  }

  .trust__cta {
    grid-column: 1 / -1;
  }

  .trust__points {
    padding-top: 0.35rem;
  }
}
</style>
