<script setup lang="ts">
withDefaults(
  defineProps<{
    variant?: 'featured' | 'heir'
    as?: 'div' | 'article' | 'section'
  }>(),
  {
    variant: 'heir',
    as: 'div',
  },
)
</script>

<template>
  <component :is="as" class="panel-perito" :class="`panel-perito--${variant}`">
    <div class="panel-perito__frame" aria-hidden="true">
      <template v-if="variant === 'featured'">
        <span class="panel-perito__corner panel-perito__corner--tl" />
        <span class="panel-perito__corner panel-perito__corner--tr" />
        <span class="panel-perito__corner panel-perito__corner--bl" />
        <span class="panel-perito__corner panel-perito__corner--br" />
      </template>
    </div>
    <div class="panel-perito__body">
      <slot />
    </div>
  </component>
</template>

<style scoped>
.panel-perito {
  position: relative;
  background:
    linear-gradient(155deg, rgba(122, 101, 76, 0.1), transparent 46%),
    linear-gradient(340deg, rgba(122, 101, 76, 0.05), transparent 40%),
    var(--color-panel);
  border: 1px solid rgba(122, 101, 76, 0.42);
  backdrop-filter: blur(10px);
  box-shadow:
    0 0 0 3px rgba(247, 243, 237, 0.4),
    0 0 0 4px rgba(122, 101, 76, 0.28),
    var(--shadow-panel);
}

.panel-perito--featured {
  background:
    linear-gradient(155deg, rgba(122, 101, 76, 0.12), transparent 46%),
    linear-gradient(340deg, rgba(122, 101, 76, 0.06), transparent 40%),
    var(--color-panel);
  border-color: var(--color-wood);
  box-shadow:
    0 0 0 4px rgba(247, 243, 237, 0.55),
    0 0 0 5px rgba(122, 101, 76, 0.55),
    var(--shadow-panel);
}

.panel-perito--heir {
  background:
    linear-gradient(160deg, rgba(122, 101, 76, 0.08), transparent 48%),
    var(--color-panel-strong);
  border-color: rgba(122, 101, 76, 0.32);
  box-shadow:
    0 0 0 3px rgba(247, 243, 237, 0.35),
    0 0 0 4px rgba(122, 101, 76, 0.18),
    var(--shadow-panel);
}

.panel-perito__frame {
  position: absolute;
  inset: 0.55rem;
  border: 1px solid rgba(122, 101, 76, 0.18);
  pointer-events: none;
}

.panel-perito--featured .panel-perito__frame {
  inset: 0.7rem;
  border-color: rgba(122, 101, 76, 0.28);
}

.panel-perito__corner {
  position: absolute;
  width: 1.15rem;
  height: 1.15rem;
  border-color: var(--color-wood);
  border-style: solid;
}

.panel-perito__corner--tl {
  top: -1px;
  left: -1px;
  border-width: 2px 0 0 2px;
}

.panel-perito__corner--tr {
  top: -1px;
  right: -1px;
  border-width: 2px 2px 0 0;
}

.panel-perito__corner--bl {
  bottom: -1px;
  left: -1px;
  border-width: 0 0 2px 2px;
}

.panel-perito__corner--br {
  bottom: -1px;
  right: -1px;
  border-width: 0 2px 2px 0;
}

.panel-perito__body {
  position: relative;
  z-index: 1;
  padding: clamp(1.35rem, 3vw, 2rem);
}

.panel-perito--featured .panel-perito__body {
  padding: clamp(1.75rem, 3.8vw, 2.65rem);
}
</style>
