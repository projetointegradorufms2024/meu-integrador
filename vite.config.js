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
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
  test: {
    globals: true,             // permite usar funções como `describe` e `it` sem importar
    environment: 'jsdom',      // simula o DOM para testes de componentes Vue
    include: ['tests/**/*.test.js'] // onde estão os arquivos de teste
  }
})
