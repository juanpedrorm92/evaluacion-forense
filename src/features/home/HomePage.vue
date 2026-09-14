<script setup lang="ts">
import HeroSection from './components/HeroSection.vue'
import ProfileSection from './components/ProfileSection.vue'
import ServicesSection from './components/ServicesSection.vue'
import TrustSection from './components/TrustSection.vue'
import FormationSection from './components/FormationSection.vue'
</script>

<template>
  <div class="home">
    <HeroSection />
    <ProfileSection />
    <ServicesSection />
    <FormationSection />
    <TrustSection />
  </div>
</template>

<style scoped>
.home {
  background: transparent;
}
</style>
