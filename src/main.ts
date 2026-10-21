import { ViteSSG } from 'vite-ssg'
import { createPinia } from 'pinia'

import App from './App.vue'
import { routes, scrollBehavior } from './router'

import './styles/tokens.css'

export const createApp = ViteSSG(
  App,
  { routes, scrollBehavior, base: import.meta.env.BASE_URL },
  ({ app }) => {
    app.use(createPinia())
  },
  { hydration: true },
)
