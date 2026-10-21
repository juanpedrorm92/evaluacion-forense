<script setup lang="ts">
import HeroSection from './components/HeroSection.vue'
import ProfileSection from './components/ProfileSection.vue'
import ServicesSection from './components/ServicesSection.vue'
import FormationSection from './components/FormationSection.vue'
import ContactSection from './components/ContactSection.vue'
</script>

<template>
  <div class="home">
    <HeroSection />
    <ProfileSection />
    <ServicesSection />
    <FormationSection />
    <ContactSection />
  </div>
</template>

<style scoped>
.home {
  background: transparent;
}
</style>
