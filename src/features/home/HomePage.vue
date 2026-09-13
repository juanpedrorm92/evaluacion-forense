<script setup lang="ts">
import HeroSection from './components/HeroSection.vue'
import AboutSection from './components/AboutSection.vue'
import ValuesSection from './components/ValuesSection.vue'
import ServicesSection from './components/ServicesSection.vue'
import TrustSection from './components/TrustSection.vue'
</script>

<template>
  <div class="home">
    <HeroSection />
    <AboutSection />
    <!-- <ValuesSection /> -->
    <ServicesSection />
    <TrustSection />
  </div>
</template>

<style scoped>
.home {
  background: transparent;
}
</style>
