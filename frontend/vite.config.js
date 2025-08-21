import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import pluginRewriteAll from '@brrock/vite-plugin-rewrite-all'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    pluginRewriteAll()
  ],
})
