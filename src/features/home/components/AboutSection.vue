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
  <section id="presentacion" class="section about">
    <div class="container">
      <PeritoPanel variant="featured" class="about__intro">
        <h2 class="section__title">Marta Vidal Parra</h2>
        <p class="about__role">Perito · Asistente Social</p>
        <p class="section__lead">
          Asistente Social con formación de postgrado en Psicología Jurídica e
          Intervención Psicosocial, mención en Mediación Familiar y Penal.
          Acreditada como perito ante las distintas Cortes de Apelaciones de Chile.
        </p>
      </PeritoPanel>

      <div class="about__grid">
        <PeritoPanel as="article" class="about__block about__block--wide">
          <h3>Formación académica</h3>
          <ul class="about__credentials about__credentials--logos">
            <li v-for="item in formation" :key="item.name">
              <div class="about__logo">
                <img :src="item.logo" :alt="`Logo ${item.institution}`" loading="lazy" />
              </div>
              <div class="about__credential-text">
                <p class="about__credential-name">{{ item.name }}</p>
                <p class="about__credential-meta">{{ item.institution }}</p>
              </div>
            </li>
          </ul>
          <p class="about__note">
            Acreditada como perito Asistente Social en las distintas Cortes de
            Apelaciones de Chile.
          </p>
        </PeritoPanel>

        <PeritoPanel as="article" class="about__block about__block--wide">
          <h3>Cursos de perfeccionamiento</h3>
          <ul class="about__credentials">
            <li v-for="item in courses" :key="item.name">
              <p class="about__credential-name">{{ item.name }}</p>
              <p class="about__credential-meta">
                {{ item.institution }} · {{ item.place }}
              </p>
            </li>
          </ul>
        </PeritoPanel>

        <PeritoPanel as="article" class="about__block">
          <h3>Ámbitos de competencia</h3>
          <ul>
            <li v-for="item in competencies" :key="item">{{ item }}</li>
          </ul>
        </PeritoPanel>

        <PeritoPanel as="article" class="about__block">
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
.about {
  background: transparent;
  border-block: none;
}

.about__intro {
  max-width: 44rem;
  margin-bottom: var(--space-xl);
}

.about__role {
  margin-top: 0.55rem;
  color: var(--color-wood-deep);
  font-size: 0.82rem;
  font-weight: 600;
  letter-spacing: 0.12em;
  text-transform: uppercase;
}

.about__grid {
  display: grid;
  gap: 0.85rem;
  background: transparent;
  border: none;
  box-shadow: none;
}

.about__block h3 {
  margin-bottom: 1rem;
  font-size: 1.55rem;
}

.about__block :deep(ul) {
  margin: 0;
  padding: 0;
  list-style: none;
  display: grid;
  gap: 0.75rem;
}

.about__block :deep(li) {
  position: relative;
  padding-left: 1rem;
  color: var(--color-ink-soft);
  line-height: 1.55;
}

.about__block :deep(li::before) {
  content: '';
  position: absolute;
  left: 0;
  top: 0.65em;
  width: 0.35rem;
  height: 0.35rem;
  background: var(--color-wood);
}

.about__credentials {
  gap: 1.15rem;
}

.about__credentials--logos {
  gap: 1.35rem;
}

.about__credentials--logos li {
  display: grid;
  grid-template-columns: 4.5rem 1fr;
  gap: 1rem;
  align-items: center;
  padding: 1rem;
  border: 1px solid rgba(122, 101, 76, 0.06);
  background: rgba(240, 235, 228, 0.55);
}

.about__credentials--logos li::before {
  display: none;
}

.about__logo {
  display: grid;
  place-items: center;
  width: 4.5rem;
  height: 4.5rem;
  padding: 0.45rem;
  background: rgba(247, 243, 237, 0.8);
  border: 1px solid rgba(122, 101, 76, 0.05);
}

.about__logo img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.about__credential-name {
  color: var(--color-ink);
  font-weight: 500;
}

.about__credential-meta {
  margin-top: 0.2rem;
  color: var(--color-muted);
  font-size: 0.92rem;
}

.about__note {
  margin-top: 1.25rem;
  padding-top: 1.25rem;
  border-top: 1px solid rgba(122, 101, 76, 0.1);
  color: var(--color-ink);
  font-weight: 500;
  line-height: 1.55;
}

@media (min-width: 768px) {
  .about__grid {
    grid-template-columns: 1fr 1fr;
  }

  .about__block--wide {
    grid-column: 1 / -1;
  }

  .about__credentials {
    grid-template-columns: 1fr 1fr;
  }
}
</style>
