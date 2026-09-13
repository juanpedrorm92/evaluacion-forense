<script setup lang="ts">
const values = [
  {
    title: 'Disciplina',
    text: 'Procedimientos claros, trazabilidad y constancia metodológica en cada etapa de la evaluación.',
  },
  {
    title: 'Enfoque',
    text: 'Atención precisa al objeto de estudio, sin desviaciones ni conclusiones apresuradas.',
  },
  {
    title: 'Resultados',
    text: 'Informes útiles, fundamentados y comprensibles para quienes deben tomar decisiones.',
  },
]
</script>

<template>
  <section id="valores" class="section values">
    <div class="container">
      <p class="section__eyebrow">Principios de trabajo</p>
      <h2 class="section__title">Lo que guía cada evaluación</h2>
      <p class="section__lead">
        Disciplina, enfoque y resultados no son lemas decorativos: son la forma
        en que sostenemos la calidad de nuestro trabajo forense.
      </p>

      <ul class="values__list">
        <li v-for="(item, index) in values" :key="item.title" class="values__item">
          <span class="values__index">0{{ index + 1 }}</span>
          <h3>{{ item.title }}</h3>
          <p>{{ item.text }}</p>
        </li>
      </ul>
    </div>
  </section>
</template>

<style scoped>
.values {
  background:
    linear-gradient(180deg, var(--color-paper) 0%, var(--color-paper-deep) 100%);
}

.values__list {
  display: grid;
  gap: 0;
  margin: var(--space-xl) 0 0;
  padding: 0;
  list-style: none;
  border-top: 1px solid var(--color-line);
}

.values__item {
  display: grid;
  gap: 0.75rem;
  padding-block: var(--space-lg);
  border-bottom: 1px solid var(--color-line);
}

.values__index {
  color: var(--color-wood);
  font-family: var(--font-display);
  font-size: 1.1rem;
  font-weight: 600;
  letter-spacing: 0.08em;
}

.values__item h3 {
  font-size: clamp(1.8rem, 3vw, 2.4rem);
}

.values__item p {
  max-width: 36rem;
  color: var(--color-muted);
}

@media (min-width: 900px) {
  .values__list {
    grid-template-columns: repeat(3, 1fr);
    border-top: none;
    gap: 0;
    margin-top: var(--space-xl);
  }

  .values__item {
    padding: var(--space-lg) var(--space-lg) 0 0;
    border-bottom: none;
    border-right: 1px solid var(--color-line);
  }

  .values__item:last-child {
    border-right: none;
    padding-right: 0;
  }

  .values__item:not(:first-child) {
    padding-left: var(--space-lg);
  }
}
</style>
