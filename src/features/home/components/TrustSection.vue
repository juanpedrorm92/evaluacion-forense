<script setup lang="ts">
import { ref } from 'vue'
import logoCentro from '@/assets/images/logo-centro.jpg'
import ContactEmailModal from './ContactEmailModal.vue'
import PeritoPanel from './PeritoPanel.vue'

const contactOpen = ref(false)

const values = [
  {
    title: 'Integridad',
    text: 'Actuación coherente y transparente en cada etapa de la evaluación.',
    mark: 'I',
  },
  {
    title: 'Ética',
    text: 'Resguardo de la confidencialidad, el respeto y los límites profesionales.',
    mark: 'II',
  },
  {
    title: 'Dedicación',
    text: 'Atención cuidadosa a cada caso y a su impacto en el proceso judicial.',
    mark: 'III',
    wide: true,
  },
  {
    title: 'Objetividad',
    text: 'Análisis fundamentado, sin sesgos, al servicio de la verdad procesal.',
    mark: 'IV',
  },
  {
    title: 'Responsabilidad',
    text: 'Compromiso técnico con la calidad y la utilidad del informe pericial.',
    mark: 'V',
  },
]

function openContactModal() {
  contactOpen.value = true
}
</script>

<template>
  <section id="confianza" class="section trust">
    <div class="container">
      <PeritoPanel class="trust__panel">
        <div class="trust__intro">
          <div class="trust__copy">
            <p class="section__eyebrow trust__eyebrow">Compromiso institucional</p>
            <h2 class="section__title trust__title">Servicio profesional de calidad</h2>
            <p class="trust__lead">
              Nuestro servicio se basa en la calidad profesional, guiado por valores de
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

        <div class="trust__dna">

          <ul class="trust__points">
            <li
              v-for="value in values"
              :key="value.title"
              class="trust__point"
              :class="{ 'trust__point--core': value.wide }"
            >
              <span class="trust__point-mark" aria-hidden="true">{{ value.mark }}</span>
              <div class="trust__point-body">
                <strong>{{ value.title }}</strong>
                <span>{{ value.text }}</span>
              </div>
            </li>
          </ul>
        </div>

        <div class="trust__cta">
          <button type="button" class="btn btn--outline" @click="openContactModal">
            Solicitar una evaluación
          </button>
        </div>
      </PeritoPanel>
    </div>

    <ContactEmailModal v-model="contactOpen" />
  </section>
</template>

<style scoped>
.trust {
  padding-block: var(--space-2xl);
  background: transparent;
}

.trust__intro {
  display: grid;
  gap: var(--space-lg);
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
  justify-self: center;
}

.trust__logo {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: contain;
  object-position: center;
  border-radius: 50%;
  box-shadow: 0 10px 28px rgba(28, 22, 16, 0.2);
}

.trust__dna {
  margin-top: var(--space-xl);
  padding-top: var(--space-lg);
  /* border-top: 1px solid rgba(122, 101, 76, 0.16); */
}

.trust__dna-head {
  display: grid;
  gap: 0.45rem;
  margin-bottom: var(--space-lg);
  max-width: 36rem;
}

.trust__dna-label {
  color: var(--color-wood-deep);
  font-size: 0.72rem;
  font-weight: 600;
  letter-spacing: 0.16em;
  text-transform: uppercase;
}

.trust__dna-note {
  color: var(--color-muted);
  font-size: 0.95rem;
  line-height: 1.6;
}

.trust__points {
  display: grid;
  grid-template-columns: 1fr;
  gap: 0.85rem;
  margin: 0;
  padding: 0;
  list-style: none;
}

.trust__point {
  position: relative;
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 0.9rem;
  align-items: start;
  padding: 1.15rem 1.2rem;
  background:
    linear-gradient(155deg, rgba(122, 101, 76, 0.07), transparent 55%),
    rgba(247, 243, 237, 0.55);
  border: 1px solid rgba(122, 101, 76, 0.16);
  box-shadow:
    0 0 0 2px rgba(247, 243, 237, 0.3),
    0 0 0 3px rgba(122, 101, 76, 0.08);
}

.trust__point--core {
  background:
    linear-gradient(160deg, rgba(45, 69, 56, 0.08), transparent 48%),
    linear-gradient(200deg, rgba(122, 101, 76, 0.1), transparent 55%),
    rgba(247, 243, 237, 0.72);
  border-color: rgba(122, 101, 76, 0.28);
  box-shadow:
    0 0 0 3px rgba(247, 243, 237, 0.4),
    0 0 0 4px rgba(122, 101, 76, 0.16),
    var(--shadow-panel);
}

.trust__point-mark {
  display: grid;
  place-items: center;
  min-width: 2rem;
  color: var(--color-wood);
  font-family: var(--font-display);
  font-size: 1.15rem;
  font-weight: 600;
  letter-spacing: 0.04em;
  line-height: 1;
  padding-top: 0.2rem;
}

.trust__point--core .trust__point-mark {
  color: var(--color-forest);
}

.trust__point-body {
  display: grid;
  gap: 0.35rem;
  min-width: 0;
}

.trust__point strong {
  font-family: var(--font-display);
  font-size: 1.45rem;
  font-weight: 600;
  color: var(--color-ink);
}

.trust__point span {
  color: var(--color-muted);
  line-height: 1.6;
}

.trust__cta {
  margin-top: var(--space-lg);
}

@media (min-width: 720px) {
  .trust__points {
    grid-template-columns: 1fr 1fr;
    gap: 1rem var(--space-lg);
  }

  .trust__point--core {
    grid-column: 1 / -1;
    width: calc((100% - var(--space-lg)) / 2);
    justify-self: center;
    text-align: left;
  }
}

@media (min-width: 900px) {
  .trust__intro {
    grid-template-columns: 1.35fr 0.85fr;
    align-items: center;
    min-width: 0;
  }

  .trust__logo-wrap {
    width: min(100%, 12rem);
    justify-self: center;
    align-self: center;
  }

  .trust__dna-head {
    margin-bottom: var(--space-xl);
  }

  .trust__point {
    padding: 1.3rem 1.4rem;
  }

  .trust__point strong {
    font-size: 1.55rem;
  }
}
</style>
