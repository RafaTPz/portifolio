import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  // No GitHub Pages o site fica em /portifolio_aula_simone/; localmente segue em /
  base: process.env.GITHUB_ACTIONS ? '/portifolio_aula_simone/' : '/',
  plugins: [react()],
})
