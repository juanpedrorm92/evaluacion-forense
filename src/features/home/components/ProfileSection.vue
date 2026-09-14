<script setup lang="ts">
import PeritoPanel from './PeritoPanel.vue'
</script>

<template>
  <section id="presentacion" class="section profile">
    <div class="container">
      <PeritoPanel variant="featured" class="profile__card">
        <h2 class="section__title">Marta Vidal Parra</h2>
        <p class="profile__role">Perito · Asistente Social</p>
        <p class="section__lead">
          Asistente Social con formación de postgrado en Psicología Jurídica e
          Intervención Psicosocial, mención en Mediación Familiar y Penal.
          Acreditada como perito ante las distintas Cortes de Apelaciones de Chile.
        </p>
      </PeritoPanel>
    </div>
  </section>
</template>

<style scoped>
.profile {
  background: transparent;
  border-block: none;
}

.profile__card {
  max-width: 44rem;
}

.profile__role {
  margin-top: 0.55rem;
  color: var(--color-wood-deep);
  font-size: 0.82rem;
  font-weight: 600;
  letter-spacing: 0.12em;
  text-transform: uppercase;
}
</style>
