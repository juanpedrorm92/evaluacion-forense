<script setup lang="ts">
import PeritoPanel from './PeritoPanel.vue'
import { aboutParagraphs, credentials, expert } from '../siteContent'
</script>

<template>
  <section id="presentacion" class="section profile">
    <div class="container">
      <PeritoPanel variant="featured" class="profile__card">
        <div class="profile__intro">
          <figure class="profile__portrait">
            <picture>
              <source
                type="image/webp"
                srcset="/images/hero-800.webp 800w, /images/hero-1200.webp 1200w"
                sizes="(min-width: 800px) 17rem, 100vw"
              />
              <img
                src="/images/hero-800.jpg"
                srcset="/images/hero-800.jpg 800w, /images/hero-1200.jpg 1200w"
                sizes="(min-width: 800px) 17rem, 100vw"
                width="800"
                height="1000"
                alt="Retrato de Marta Vidal Parra, perito judicial y asistente social"
              />
            </picture>
          </figure>

          <div>
            <p class="section__eyebrow">Sobre mí</p>
            <h2 class="section__title">{{ expert.name }}</h2>
            <p class="profile__role">{{ expert.role }}</p>
            <div class="profile__bio">
              <p
                v-for="paragraph in aboutParagraphs"
                :key="paragraph.text"
                :class="{ 'profile__emphasis': paragraph.emphasis }"
              >
                {{ paragraph.text }}
              </p>
            </div>
          </div>
        </div>

        <dl class="profile__credentials">
          <div v-for="item in credentials" :key="item.label">
            <dt>{{ item.label }}</dt>
            <dd>
              <strong>{{ item.value }}</strong>
              <span>{{ item.detail }}</span>
            </dd>
          </div>
        </dl>
      </PeritoPanel>
    </div>
  </section>
</template>

<style scoped>
.profile {
  background: transparent;
  border-block: none;
}

.profile__intro {
  display: grid;
  gap: var(--space-lg);
  align-items: start;
}

.profile__portrait {
  margin: 0;
}

.profile__portrait img {
  width: 100%;
  height: 16rem;
  object-fit: cover;
  object-position: center 24%;
  background: var(--color-paper-deep);
}

.profile__role {
  margin-top: 0.55rem;
  color: var(--color-wood-deep);
  font-size: 0.82rem;
  font-weight: 600;
  letter-spacing: 0.12em;
  text-transform: uppercase;
}

.profile__bio {
  display: grid;
  gap: 0.9rem;
  max-width: 40rem;
  margin-top: var(--space-md);
  color: var(--color-muted);
  font-size: 1.05rem;
  line-height: 1.7;
}

.profile__emphasis {
  color: var(--color-ink);
  font-weight: 500;
  padding-left: 0.9rem;
  border-left: 2px solid var(--color-wood);
}

.profile__credentials {
  display: grid;
  gap: 0.85rem;
  margin: var(--space-xl) 0 0;
  padding: var(--space-lg) 0 0;
  border-top: 1px solid rgba(122, 101, 76, 0.16);
}

.profile__credentials div {
  display: grid;
  gap: 0.35rem;
}

.profile__credentials dt {
  color: var(--color-wood-deep);
  font-size: 0.72rem;
  font-weight: 600;
  letter-spacing: 0.14em;
  text-transform: uppercase;
}

.profile__credentials dd {
  margin: 0;
  display: grid;
  gap: 0.2rem;
}

.profile__credentials strong {
  color: var(--color-ink);
  font-family: var(--font-display);
  font-size: 1.35rem;
  font-weight: 600;
  line-height: 1.2;
}

.profile__credentials span {
  color: var(--color-muted);
  line-height: 1.5;
}

@media (min-width: 800px) {
  .profile__intro {
    grid-template-columns: 22rem 1fr;
    gap: var(--space-xl);
    align-items: center;
  }

  .profile__portrait img {
    height: 16.5rem;
  }

  .profile__credentials {
    grid-template-columns: 1fr 1fr;
    gap: 1.25rem 2rem;
  }
}
</style>
