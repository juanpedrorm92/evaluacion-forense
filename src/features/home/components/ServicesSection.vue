<script setup lang="ts">
import PeritoPanel from './PeritoPanel.vue'
import { serviceAreas } from '../siteContent'

const areas = serviceAreas
</script>

<template>
  <section id="servicios" class="section services">
    <div class="container">
      <PeritoPanel class="services__panel">
        <p class="section__eyebrow">Ámbito de trabajo</p>
        <h2 class="section__title">Servicios</h2>

        <div class="services__grid">
          <article v-for="area in areas" :key="area.id" class="service" :class="`service--${area.id}`">
            <header class="service__header">
              <span class="service__icon" aria-hidden="true">
                <svg v-if="area.icon === 'penal'" viewBox="0 0 32 32" fill="none">
                  <path
                    d="M16 4v24M10 8h9.5a3.5 3.5 0 0 1 0 7H10m0 0h10a3.5 3.5 0 0 1 0 7H10"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>

                <svg v-else-if="area.icon === 'civil'" viewBox="0 0 32 32" fill="none">
                  <path
                    d="M6 27V11l10-6 10 6v16"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M12 27v-8h8v8M16 5v4"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>

                <svg v-else-if="area.icon === 'laboral'" viewBox="0 0 32 32" fill="none">
                  <path
                    d="M11 12V9a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v3"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <rect
                    x="5"
                    y="12"
                    width="22"
                    height="14"
                    rx="1.5"
                    stroke="currentColor"
                    stroke-width="1.5"
                  />
                  <path
                    d="M5 17h22"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="round"
                  />
                </svg>

                <svg v-else viewBox="0 0 32 32" fill="none">
                  <circle cx="16" cy="8" r="3" stroke="currentColor" stroke-width="1.5" />
                  <circle cx="8.5" cy="20" r="2.5" stroke="currentColor" stroke-width="1.5" />
                  <circle cx="23.5" cy="20" r="2.5" stroke="currentColor" stroke-width="1.5" />
                  <path
                    d="M16 11.5v3.5M16 15l-5.5 3.5M16 15l5.5 3.5"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </span>

              <h3>{{ area.title }}</h3>
            </header>

            <div v-if="area.groups" class="service__groups">
              <div v-for="group in area.groups" :key="group.title" class="service__group">
                <h4>{{ group.title }}</h4>
                <article v-for="item in group.items" :key="item.name" class="offer">
                  <h5>{{ item.name }}</h5>
                  <p>{{ item.purpose }}</p>
                </article>
              </div>
            </div>

            <div v-else class="service__offers">
              <article v-for="item in area.items" :key="item.name" class="offer">
                <h5>{{ item.name }}</h5>
                <p>{{ item.purpose }}</p>
              </article>
            </div>
          </article>
        </div>

        <div class="services__cta">
          <a class="btn btn--primary" href="#contacto">Solicita cotización</a>
        </div>
      </PeritoPanel>
    </div>
  </section>
</template>

<style scoped>
.services {
  background: transparent;
}

.services__grid {
  display: grid;
  gap: 0.85rem;
  margin-top: var(--space-xl);
}

.service {
  position: relative;
  display: grid;
  gap: 1.25rem;
  padding: var(--space-lg);
  background: rgba(247, 243, 237, 0.55);
  border: 1px solid rgba(122, 101, 76, 0.2);
  box-shadow:
    0 0 0 2px rgba(247, 243, 237, 0.35),
    0 0 0 3px rgba(122, 101, 76, 0.1);
}

.service__header {
  display: flex;
  align-items: center;
  gap: 0.9rem;
}

.service__icon {
  display: grid;
  place-items: center;
  width: 2.75rem;
  height: 2.75rem;
  flex-shrink: 0;
  border: 1px solid rgba(122, 101, 76, 0.14);
  color: var(--color-wood-deep);
  background: rgba(240, 235, 228, 0.7);
}

.service__icon svg {
  width: 1.35rem;
  height: 1.35rem;
}

.service h3 {
  margin: 0;
  font-size: 1.65rem;
}

.service__groups {
  display: grid;
  gap: 1.35rem;
}

.service__group h4 {
  margin: 0 0 0.7rem;
  color: var(--color-wood-deep);
  font-family: var(--font-body);
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.12em;
  text-transform: uppercase;
}

.service__offers,
.service__group {
  display: grid;
  align-content: start;
  gap: 1.25rem;
}

.offer {
  display: grid;
  gap: 0.55rem;
  padding-top: 1.1rem;
  border-top: 1px solid rgba(122, 101, 76, 0.16);
}

.offer h5 {
  margin: 0;
  color: var(--color-ink);
  font-family: var(--font-display);
  font-size: clamp(1.7rem, 2.4vw, 2.05rem);
  font-weight: 600;
  line-height: 1.12;
}

.offer p {
  max-width: 38rem;
  color: var(--color-muted);
  font-size: 0.95rem;
  line-height: 1.5;
}

.services__cta {
  display: flex;
  flex-wrap: wrap;
  gap: 0.85rem;
  margin-top: var(--space-xl);
}

@media (min-width: 900px) {
  .services__grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .service--penal,
  .service--familia {
    grid-column: 1 / -1;
  }

  .service--penal .service__groups,
  .service--familia .service__offers {
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
  }
}

@media (max-width: 640px) {
  .services__cta {
    flex-direction: column;
  }

  .services__cta .btn {
    width: calc(100% - 4.75rem);
  }
}
</style>
