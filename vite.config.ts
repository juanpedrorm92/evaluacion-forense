/// <reference types="vite-ssg" />

import { readFile, writeFile } from 'node:fs/promises'
import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueDevTools(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  ssgOptions: {
    script: 'async',
    dirStyle: 'nested',
    async onFinished() {
      const file = fileURLToPath(new URL('./dist/index.html', import.meta.url))
      const html = await readFile(file, 'utf8')
      const fixed = html.replace(/<html\b([^>]*)>/, (_tag, attrs: string) => {
        const rest = attrs.replace(/\s*lang="[^"]*"/, '')
        return `<html lang="es"${rest}>`
      })
      if (fixed !== html) await writeFile(file, fixed)
    },
  },
  server: {
    host: '0.0.0.0',
    port: 5173,
    watch: {
      usePolling: true,
    },
    proxy: {
      '/api': {
        target: process.env.CONTACT_API_URL || 'http://192.168.100.42:3000',
        changeOrigin: true,
      },
    },
  },
})
