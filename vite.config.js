import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/economics-map/',
  plugins: [react()],
  test: { environment: 'node', globals: true },
})
