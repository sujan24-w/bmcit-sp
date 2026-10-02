import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/bmcit-sp/',   // <-- Added  this line for GitHub Pages
  plugins: [react()],
  server: {
    host: '0.0.0.0',   // allows access from other devices
    port: 5173,
  },
})
