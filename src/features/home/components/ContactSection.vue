<script setup lang="ts">
import { reactive, ref } from 'vue'
import PeritoPanel from './PeritoPanel.vue'
import { causeOptions, contact, whatsappHref } from '../siteContent'

const form = reactive({
  name: '',
  email: '',
  phone: '',
  cause: '',
  commune: '',
  message: '',
  website: '',
})

const submitting = ref(false)
const submitError = ref('')
const submitSuccess = ref(false)

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
        cause: form.cause,
        commune: form.commune.trim(),
        message: form.message.trim(),
        website: form.website,
      }),
    })

    const data = (await response.json().catch(() => null)) as { ok?: boolean; error?: string } | null

    if (!response.ok || !data?.ok) {
      throw new Error(data?.error || 'No se pudo enviar el mensaje.')
    }

    submitSuccess.value = true
    form.name = ''
    form.email = ''
    form.phone = ''
    form.cause = ''
    form.commune = ''
    form.message = ''
    form.website = ''
  } catch (error) {
    submitError.value = error instanceof Error ? error.message : 'No se pudo enviar el mensaje.'
  } finally {
    submitting.value = false
  }
}
</script>

<template>
  <section id="contacto" class="section contact">
    <div class="container">
      <PeritoPanel>
        <div class="contact__layout">
          <div class="contact__intro">
            <p class="section__eyebrow">Contacto</p>
            <h2 class="section__title">Solicita cotización</h2>
            <p class="section__lead">
              Nombre, tipo de causa y un mensaje bastan para responder con alcance y valor.
            </p>

            <ul class="contact__channels">
              <li>
                <span>Teléfono</span>
                <a :href="`tel:${contact.phoneTel}`">{{ contact.phoneDisplay }}</a>
              </li>
              <li>
                <span>WhatsApp</span>
                <a :href="whatsappHref()" target="_blank" rel="noopener noreferrer">{{ contact.whatsappDisplay }}</a>
              </li>
              <li>
                <span>Correo</span>
                <a :href="`mailto:${contact.email}`">{{ contact.email }}</a>
              </li>
              <li>
                <span>Atención</span>
                <strong>{{ contact.city }}, {{ contact.region }}</strong>
                <p>{{ contact.hours }}</p>
                <p>{{ contact.modality }}</p>
              </li>
            </ul>
          </div>

          <div>
            <div v-if="submitSuccess" class="contact__success" role="status">
              <p><strong>Mensaje enviado.</strong></p>
              <p>Nos pondremos en contacto a la brevedad.</p>
            </div>

            <form v-else class="contact__form" @submit.prevent="onSubmit">
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
                <span>Tipo de causa</span>
                <select v-model="form.cause" name="cause" required :disabled="submitting">
                  <option value="" disabled>Seleccione</option>
                  <option v-for="option in causeOptions" :key="option" :value="option">
                    {{ option }}
                  </option>
                </select>
              </label>

              <div class="contact__row">
                <label class="field">
                  <span>Teléfono</span>
                  <input
                    v-model="form.phone"
                    type="tel"
                    name="phone"
                    autocomplete="tel"
                    required
                    :disabled="submitting"
                    placeholder="+56 9 0000 0000"
                  />
                </label>

                <label class="field">
                  <span>Comuna</span>
                  <input
                    v-model="form.commune"
                    type="text"
                    name="commune"
                    autocomplete="address-level2"
                    required
                    :disabled="submitting"
                    placeholder="Temuco"
                  />
                </label>
              </div>

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
                <span>Mensaje</span>
                <textarea
                  v-model="form.message"
                  name="message"
                  rows="4"
                  required
                  :disabled="submitting"
                  placeholder="Tribunal, rol de la causa y qué necesita evaluar"
                />
              </label>

              <p v-if="submitError" class="contact__error" role="alert">{{ submitError }}</p>

              <button type="submit" class="btn btn--primary" :disabled="submitting">
                {{ submitting ? 'Enviando…' : 'Enviar solicitud' }}
              </button>
            </form>
          </div>
        </div>
      </PeritoPanel>
    </div>
  </section>
</template>

<style scoped>
.contact {
  background: transparent;
}

.contact__layout {
  display: grid;
  gap: var(--space-xl);
}

.contact__channels {
  display: grid;
  gap: 1.15rem;
  margin: var(--space-lg) 0 0;
  padding: 0;
  list-style: none;
}

.contact__channels li {
  display: grid;
  gap: 0.15rem;
}

.contact__channels span {
  color: var(--color-wood-deep);
  font-size: 0.72rem;
  font-weight: 600;
  letter-spacing: 0.12em;
  text-transform: uppercase;
}

.contact__channels a,
.contact__channels strong {
  color: var(--color-ink);
  font-weight: 600;
}

.contact__channels a:hover {
  color: var(--color-forest);
}

.contact__channels p {
  color: var(--color-muted);
  line-height: 1.55;
}

.contact__form {
  display: grid;
  gap: 1rem;
}

.contact__row {
  display: grid;
  gap: 1rem;
}

.contact__success {
  display: grid;
  gap: 0.6rem;
  color: var(--color-forest);
}

.contact__error {
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

.field input,
.field select,
.field textarea {
  width: 100%;
  padding: 0.75rem 0.9rem;
  border: 1px solid var(--color-line);
  border-radius: 2px;
  background: var(--color-paper);
  color: var(--color-ink);
  font: inherit;
  line-height: 1.45;
}

.field select {
  appearance: none;
  background-image: linear-gradient(45deg, transparent 50%, var(--color-wood-deep) 50%),
    linear-gradient(135deg, var(--color-wood-deep) 50%, transparent 50%);
  background-position:
    calc(100% - 1.05rem) 55%,
    calc(100% - 0.7rem) 55%;
  background-size:
    0.35rem 0.35rem,
    0.35rem 0.35rem;
  background-repeat: no-repeat;
}

.field input:focus,
.field select:focus,
.field textarea:focus {
  outline: none;
  border-color: var(--color-forest);
  background-color: #fff;
}

.field textarea {
  resize: vertical;
  min-height: 6.5rem;
}

.field input:disabled,
.field select:disabled,
.field textarea:disabled,
.contact__form .btn:disabled {
  opacity: 0.7;
  cursor: not-allowed;
}

.contact__form .btn {
  justify-self: start;
}

@media (min-width: 800px) {
  .contact__layout {
    grid-template-columns: 0.9fr 1.1fr;
    align-items: start;
  }

  .contact__row {
    grid-template-columns: 1fr 1fr;
  }
}

@media (max-width: 640px) {
  .contact__form .btn {
    width: calc(100% - 4.75rem);
  }
}
</style>
