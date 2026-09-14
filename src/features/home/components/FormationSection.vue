<script setup lang="ts">
import logoUnab from '@/assets/images/universities/unab.png'
import logoMayor from '@/assets/images/universities/mayor.jpg'
import logoUct from '@/assets/images/universities/uct.png'
import logoUfro from '@/assets/images/universities/ufro.png'
import PeritoPanel from './PeritoPanel.vue'

const formation = [
  {
    institution: 'Universidad Andrés Bello',
    name: 'Diplomado en Criminología',
    logo: logoUnab,
  },
  {
    institution: 'Universidad Mayor, sede Temuco',
    name: 'Magíster en Psicología Jurídica e Intervención Psicosocial, mención en Mediación Familiar y Penal',
    logo: logoMayor,
  },
  {
    institution: 'Universidad Católica de Temuco',
    name: 'Diplomado en Peritaje Social, Psicológico y Antropológico',
    logo: logoUct,
  },
  {
    institution: 'Universidad de La Frontera, Temuco',
    name: 'Postítulo en Modelos de Intervención en Abuso Sexual Infanto-Juvenil',
    logo: logoUfro,
  },
]

const courses = [
  {
    institution: 'Academia Forense de Chile',
    name: 'Técnicas para la Elaboración del Peritaje Socioeconómico',
    place: 'Temuco, Chile',
  },
  {
    institution: 'Academia Forense de Chile',
    name: 'Renta, Análisis Tributario y Financiero en el Peritaje Socioeconómico',
    place: 'Temuco, Chile',
  },
  {
    institution: 'Universidad Mayor, sede Temuco',
    name: 'Especialización en Psicología del Testimonio',
    place: 'Temuco, Chile',
  },
  {
    institution: 'Universidad Santo Tomás – Proyecto SENADIS',
    name: 'Estrategias de comunicación con personas sordas',
    place: 'Temuco, Chile',
  },
  {
    institution: 'Santo Tomás, sede Temuco',
    name: 'Seminario Competencias Interculturales',
    place: 'Temuco, Chile',
  },
  {
    institution: 'Santo Tomás, sede Temuco',
    name: 'Estrategias de comunicación efectiva',
    place: 'Temuco, Chile',
  },
]

const competencies = [
  'Protección y derechos de la infancia',
  'Diseño y proceso de la investigación pericial en contexto judicial',
  'Intervención ante Tribunales de Familia, Fiscalía, Defensoría Penal Pública y Tribunales de Garantía',
  'Elaboración y ejecución de proyectos sociales',
  'Cobertura y oferta programática del Ministerio de Educación',
]

const instruments = [
  'Escala de Evaluación Familiar Eco-Sistémica NCFAS',
  'Modelo Circumplejo de Olson',
  'F.A.C.E.S. III',
  'Cuestionario Parental Bonding Instrument (PBI)',
  'Escala de Parentalidad Positiva (E2P)',
  'Genograma',
  'Ecomapa',
]
</script>

<template>
  <section id="formacion" class="section formation">
    <div class="container">
    

      <div class="formation__grid">
        <PeritoPanel as="article" class="formation__block formation__block--wide">
          <h3>Formación académica</h3>
          <ul class="formation__credentials formation__credentials--logos">
            <li v-for="item in formation" :key="item.name">
              <div class="formation__logo">
                <img :src="item.logo" :alt="`Logo ${item.institution}`" loading="lazy" />
              </div>
              <div class="formation__credential-text">
                <p class="formation__credential-name">{{ item.name }}</p>
                <p class="formation__credential-meta">{{ item.institution }}</p>
              </div>
            </li>
          </ul>
          <p class="formation__note">
            Acreditada como perito Asistente Social en las distintas Cortes de
            Apelaciones de Chile.
          </p>
        </PeritoPanel>

        <PeritoPanel as="article" class="formation__block formation__block--wide">
          <h3>Cursos de perfeccionamiento</h3>
          <ul class="formation__credentials">
            <li v-for="item in courses" :key="item.name">
              <p class="formation__credential-name">{{ item.name }}</p>
              <p class="formation__credential-meta">
                {{ item.institution }} · {{ item.place }}
              </p>
            </li>
          </ul>
        </PeritoPanel>

        <PeritoPanel as="article" class="formation__block">
          <h3>Ámbitos de competencia</h3>
          <ul>
            <li v-for="item in competencies" :key="item">{{ item }}</li>
          </ul>
        </PeritoPanel>

        <PeritoPanel as="article" class="formation__block">
          <h3>Instrumentos y modelos</h3>
          <ul>
            <li v-for="item in instruments" :key="item">{{ item }}</li>
          </ul>
        </PeritoPanel>
      </div>
    </div>
  </section>
</template>

<style scoped>
.formation {
  background: transparent;
  border-block: none;
}

.formation__intro {
  max-width: 42rem;
  margin-bottom: var(--space-xl);
  padding: clamp(1.35rem, 3vw, 2rem);
  background:
    linear-gradient(155deg, rgba(122, 101, 76, 0.08), transparent 48%),
    var(--color-panel);
  border: 1px solid rgba(122, 101, 76, 0.08);
  backdrop-filter: blur(10px);
  box-shadow: var(--shadow-panel);
}

.formation__grid {
  display: grid;
  gap: 0.85rem;
}

.formation__block h3 {
  margin-bottom: 1rem;
  font-size: 1.55rem;
}

.formation__block :deep(ul) {
  margin: 0;
  padding: 0;
  list-style: none;
  display: grid;
  gap: 0.75rem;
}

.formation__block :deep(li) {
  position: relative;
  padding-left: 1rem;
  color: var(--color-ink-soft);
  line-height: 1.55;
}

.formation__block :deep(li::before) {
  content: '';
  position: absolute;
  left: 0;
  top: 0.65em;
  width: 0.35rem;
  height: 0.35rem;
  background: var(--color-wood);
}

.formation__credentials {
  gap: 1.15rem;
}

.formation__credentials--logos {
  gap: 1.35rem;
}

.formation__credentials--logos li {
  display: grid;
  grid-template-columns: 4.5rem 1fr;
  gap: 1rem;
  align-items: center;
  padding: 1rem;
  border: 1px solid rgba(122, 101, 76, 0.06);
  background: rgba(240, 235, 228, 0.55);
}

.formation__credentials--logos li::before {
  display: none;
}

.formation__logo {
  display: grid;
  place-items: center;
  width: 4.5rem;
  height: 4.5rem;
  padding: 0.45rem;
  background: rgba(247, 243, 237, 0.8);
  border: 1px solid rgba(122, 101, 76, 0.05);
}

.formation__logo img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.formation__credential-name {
  color: var(--color-ink);
  font-weight: 500;
}

.formation__credential-meta {
  margin-top: 0.2rem;
  color: var(--color-muted);
  font-size: 0.92rem;
}

.formation__note {
  margin-top: 1.25rem;
  padding-top: 1.25rem;
  border-top: 1px solid rgba(122, 101, 76, 0.1);
  color: var(--color-ink);
  font-weight: 500;
  line-height: 1.55;
}

@media (min-width: 768px) {
  .formation__grid {
    grid-template-columns: 1fr 1fr;
  }

  .formation__block--wide {
    grid-column: 1 / -1;
  }

  .formation__credentials {
    grid-template-columns: 1fr 1fr;
  }
}
</style>
