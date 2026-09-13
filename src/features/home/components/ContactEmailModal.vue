<script setup lang="ts">
import { nextTick, onUnmounted, reactive, ref, watch } from 'vue'

const open = defineModel<boolean>({ default: false })

const CONTACT_EMAIL = 'consultas@centroevaluacionesforense.cl'

const form = reactive({
  name: '',
  email: '',
  phone: '',
  message: '',
  website: '', // honeypot
})

const dialogRef = ref<HTMLDialogElement | null>(null)
const closeBtnRef = ref<HTMLButtonElement | null>(null)
const submitting = ref(false)
const submitError = ref('')
const submitSuccess = ref(false)

function resetForm() {
  form.name = ''
  form.email = ''
  form.phone = ''
  form.message = ''
  form.website = ''
  submitError.value = ''
  submitSuccess.value = false
}

function close() {
  open.value = false
}

function onCancel(event: Event) {
  event.preventDefault()
  close()
}

function onBackdropClick(event: MouseEvent) {
  if (event.target === dialogRef.value) {
    close()
  }
}

async function onSubmit() {
  if (submitting.value) return

  submitting.value = true
  submitError.value = ''
  submitSuccess.value = false

  try {
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: form.name.trim(),
        email: form.email.trim(),
        phone: form.phone.trim(),
        message: form.message.trim(),
        website: form.website,
      }),
    })

    const data = (await response.json().catch(() => null)) as
      | { ok?: boolean; error?: string }
      | null

    if (!response.ok || !data?.ok) {
      throw new Error(data?.error || 'No se pudo enviar el mensaje.')
    }

    submitSuccess.value = true
    form.name = ''
    form.email = ''
    form.phone = ''
    form.message = ''
    form.website = ''
  } catch (error) {
    submitError.value =
      error instanceof Error ? error.message : 'No se pudo enviar el mensaje.'
  } finally {
    submitting.value = false
  }
}

watch(open, async (isOpen) => {
  const dialog = dialogRef.value
  if (!dialog) return

  if (isOpen) {
    resetForm()
    if (!dialog.open) dialog.showModal()
    document.body.style.overflow = 'hidden'
    await nextTick()
    closeBtnRef.value?.focus()
  } else if (dialog.open) {
    dialog.close()
    document.body.style.overflow = ''
  }
})

onUnmounted(() => {
  document.body.style.overflow = ''
})
</script>

<template>
  <dialog
    ref="dialogRef"
    class="modal"
    aria-labelledby="contact-modal-title"
    @cancel="onCancel"
    @click="onBackdropClick"
  >
    <div class="modal__panel" @click.stop>
      <header class="modal__header">
        <div>
          <p class="modal__eyebrow">Contacto</p>
          <h2 id="contact-modal-title" class="modal__title">
            Solicitar una evaluación
          </h2>
        </div>
        <button
          ref="closeBtnRef"
          type="button"
          class="modal__close"
          aria-label="Cerrar"
          @click="close"
        >
          <span aria-hidden="true">×</span>
        </button>
      </header>

      <!-- <p class="modal__lead">
        Complete el formulario y enviaremos su solicitud a
        <a :href="`mailto:${CONTACT_EMAIL}`">{{ CONTACT_EMAIL }}</a>.
      </p> -->

      <div v-if="submitSuccess" class="modal__success" role="status">
        <p><strong>Mensaje enviado.</strong></p>
        <p>Nos pondremos en contacto a la brevedad.</p>
        <button type="button" class="btn btn--primary" @click="close">
          Cerrar
        </button>
      </div>

      <form v-else class="modal__form" @submit.prevent="onSubmit">
        <!-- Honeypot anti-spam (oculto) -->
        <label class="field field--hp" aria-hidden="true">
          <span>Website</span>
          <input v-model="form.website" type="text" name="website" tabindex="-1" autocomplete="off" />
        </label>

        <label class="field">
          <span>Nombre</span>
          <input
            v-model="form.name"
            type="text"
            name="name"
            autocomplete="name"
            required
            :disabled="submitting"
            placeholder="Su nombre completo"
          />
        </label>

        <label class="field">
          <span>Correo electrónico</span>
          <input
            v-model="form.email"
            type="email"
            name="email"
            autocomplete="email"
            required
            :disabled="submitting"
            placeholder="nombre@correo.cl"
          />
        </label>

        <label class="field">
          <span>Teléfono <em>(opcional)</em></span>
          <input
            v-model="form.phone"
            type="tel"
            name="phone"
            autocomplete="tel"
            :disabled="submitting"
            placeholder="+56 9 0000 0000"
          />
        </label>

        <label class="field">
          <span>Mensaje</span>
          <textarea
            v-model="form.message"
            name="message"
            rows="4"
            required
            :disabled="submitting"
            placeholder="Indique brevemente el tipo de evaluación o consulta"
          />
        </label>

        <p v-if="submitError" class="modal__error" role="alert">{{ submitError }}</p>

        <div class="modal__actions">
          <button type="button" class="btn btn--outline" :disabled="submitting" @click="close">
            Cancelar
          </button>
          <button type="submit" class="btn btn--primary" :disabled="submitting">
            {{ submitting ? 'Enviando…' : 'Enviar solicitud' }}
          </button>
        </div>
      </form>
    </div>
  </dialog>
</template>

<style scoped>
.modal {
  width: min(100% - 2rem, 32rem);
  margin: auto;
  padding: 0;
  border: 1px solid var(--color-line);
  border-radius: 2px;
  background: transparent;
  color: var(--color-ink);
}

.modal::backdrop {
  background: rgba(18, 20, 22, 0.62);
  backdrop-filter: blur(4px);
}

.modal__panel {
  padding: clamp(1.35rem, 3vw, 2rem);
  background:
    linear-gradient(160deg, rgba(45, 69, 56, 0.06), transparent 40%),
    var(--color-surface);
}

.modal__header {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 1rem;
}

.modal__eyebrow {
  margin-bottom: 0.4rem;
  color: var(--color-wood-deep);
  font-size: 0.72rem;
  font-weight: 600;
  letter-spacing: 0.14em;
  text-transform: uppercase;
}

.modal__title {
  font-size: clamp(1.7rem, 3vw, 2.15rem);
}

.modal__close {
  display: grid;
  place-items: center;
  width: 2.5rem;
  height: 2.5rem;
  flex-shrink: 0;
  border: 1px solid var(--color-line);
  background: transparent;
  color: var(--color-ink);
  font-size: 1.5rem;
  line-height: 1;
  cursor: pointer;
  transition:
    background-color 180ms ease,
    border-color 180ms ease;
}

.modal__close:hover {
  background: var(--color-paper);
  border-color: var(--color-ink-soft);
}

.modal__lead {
  margin-top: 1rem;
  color: var(--color-muted);
  font-size: 0.95rem;
  line-height: 1.65;
}

.modal__lead a {
  color: var(--color-forest);
  text-decoration: underline;
  text-underline-offset: 0.15em;
}

.modal__form {
  display: grid;
  gap: 1rem;
  margin-top: 1.5rem;
}

.modal__success {
  display: grid;
  gap: 0.75rem;
  margin-top: 1.5rem;
  color: var(--color-forest);
}

.modal__success .btn {
  justify-self: start;
  margin-top: 0.5rem;
}

.modal__error {
  margin: 0;
  color: #8b2e2e;
  font-size: 0.9rem;
}

.field {
  display: grid;
  gap: 0.4rem;
}

.field--hp {
  position: absolute;
  left: -10000px;
  top: auto;
  width: 1px;
  height: 1px;
  overflow: hidden;
}

.field span {
  font-size: 0.78rem;
  font-weight: 600;
  letter-spacing: 0.06em;
  text-transform: uppercase;
}

.field em {
  font-style: normal;
  font-weight: 500;
  letter-spacing: 0.02em;
  text-transform: none;
  color: var(--color-muted);
}

.field input,
.field textarea {
  width: 100%;
  padding: 0.75rem 0.9rem;
  border: 1px solid var(--color-line);
  border-radius: 2px;
  background: var(--color-paper);
  color: var(--color-ink);
  font: inherit;
  line-height: 1.45;
  transition: border-color 180ms ease, background-color 180ms ease;
}

.field input:focus,
.field textarea:focus {
  outline: none;
  border-color: var(--color-forest);
  background: #fff;
}

.field input:disabled,
.field textarea:disabled {
  opacity: 0.7;
  cursor: not-allowed;
}

.field textarea {
  resize: vertical;
  min-height: 6.5rem;
}

.modal__actions {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  margin-top: 0.5rem;
}

.modal__actions .btn {
  flex: 1 1 8rem;
}

.modal__actions .btn:disabled {
  opacity: 0.7;
  cursor: not-allowed;
  transform: none;
}

@media (max-width: 480px) {
  .modal__actions {
    flex-direction: column;
  }

  .modal__actions .btn {
    width: 100%;
  }
}
</style>
