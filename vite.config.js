import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  // No GitHub Pages o site fica em /portifolio/; localmente segue em /
  base: process.env.GITHUB_ACTIONS ? '/portifolio/' : '/',
  plugins: [react()],
})
