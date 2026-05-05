import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/MathSite_V2/', // Добавьте эту строку
  plugins: [react()],
})