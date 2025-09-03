import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base:'https://xdebdesarrollos.github.io/caminohistoricocultural'
 // base:'http://localhost:5173/'
})
