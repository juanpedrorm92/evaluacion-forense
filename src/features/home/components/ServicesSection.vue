<script setup lang="ts">
type ServiceGroup = {
  title: string
  items: string[]
}

type ServiceArea = {
  id: string
  title: string
  icon: 'penal' | 'civil' | 'laboral' | 'familia'
  groups?: ServiceGroup[]
  items?: string[]
}

const areas: ServiceArea[] = [
  {
    id: 'penal',
    title: 'Ámbito penal',
    icon: 'penal',
    groups: [
      {
        title: 'Víctimas',
        items: [
          'Valoración de daño psicológico.',
          'Credibilidad del testimonio en causas de delitos sexuales.',
          'Evaluación de personalidad y funciones cognitivas.',
        ],
      },
      {
        title: 'Imputados',
        items: [
          'Evaluación de facultades mentales y funciones cognitivas.',
          'Evaluación de personalidad.',
          'Evaluación de riesgo por delitos violentos.',
          'Evaluación de arraigo familiar, laboral y social.',
          'Evaluación social a nivel familiar.',
        ],
      },
    ],
  },
  {
    id: 'civil',
    title: 'Ámbito civil',
    icon: 'civil',
    items: [
      'Valoración de daño y secuelas emocionales.',
      'Incapacidades psíquicas.',
      'Valoración de los mecanismos de protección.',
    ],
  },
  {
    id: 'laboral',
    title: 'Ámbito laboral',
    icon: 'laboral',
    items: [
      'Valoración de daño producto de situaciones de maltrato o acoso dentro de la empresa.',
      'Evaluaciones de psicopatologías derivadas del trabajo.',
    ],
  },
  {
    id: 'familia',
    title: 'Materia de familia',
    icon: 'familia',
    items: [
      'Evaluaciones psicosociales de competencias de crianza y cuidado de niños, niñas y adolescentes.',
      'Evaluaciones psicosociales en materia del Régimen de Relación Directa y Regular.',
      'Evaluación socioeconómica en materia de pensión de alimentos, compensación económica, divorcio, entre otras.',
      'Evaluaciones de contexto de violencia intrafamiliar no constitutiva de delito, Ley N° 19.968.',
    ],
  },
]
</script>

<template>
  <section id="servicios" class="section services">
    <div class="container">
      <p class="section__eyebrow">Ámbito de trabajo</p>
      <h2 class="section__title">Servicios</h2>
      <p class="section__lead">
        Evaluaciones periciales especializadas en materias penales, civiles,
        laborales y de familia, con respaldo técnico y criterio ético.
      </p>

      <div class="services__grid">
        <article v-for="area in areas" :key="area.id" class="service" :class="`service--${area.id}`">
          <header class="service__header">
            <span class="service__icon" aria-hidden="true">
              <!-- Ámbito penal -->
              <svg v-if="area.icon === 'penal'" viewBox="0 0 32 32" fill="none">
                <path
                  d="M16 4v24M10 8h9.5a3.5 3.5 0 0 1 0 7H10m0 0h10a3.5 3.5 0 0 1 0 7H10"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>

              <!-- Ámbito civil -->
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

              <!-- Ámbito laboral -->
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

              <!-- Materia de familia -->
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
              <ul>
                <li v-for="item in group.items" :key="item">{{ item }}</li>
              </ul>
            </div>
          </div>

          <ul v-else>
            <li v-for="item in area.items" :key="item">{{ item }}</li>
          </ul>
        </article>
      </div>
    </div>
  </section>
</template>

<style scoped>
.services {
  background: var(--color-surface);
}

.services__grid {
  display: grid;
  gap: 1px;
  margin-top: var(--space-xl);
  background: var(--color-line);
  border: 1px solid var(--color-line);
}

.service {
  display: grid;
  gap: 1.25rem;
  padding: var(--space-lg);
  background: var(--color-surface);
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
  border: 1px solid var(--color-line);
  color: var(--color-wood-deep);
  background: var(--color-paper);
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

.service ul {
  margin: 0;
  padding: 0;
  list-style: none;
  display: grid;
  gap: 0.7rem;
}

.service li {
  position: relative;
  padding-left: 1rem;
  color: var(--color-muted);
  line-height: 1.55;
}

.service li::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0.65em;
  width: 0.35rem;
  height: 0.35rem;
  background: var(--color-wood);
}

@media (min-width: 900px) {
  .services__grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .service--penal,
  .service--familia {
    grid-column: 1 / -1;
  }

  .service--penal .service__groups {
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
  }
}
</style>
