import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(({ command, mode }) => ({
  plugins: [react()],
  build: {
    outDir: mode === 'production' ? 'dist/client' : 'dist',
    emptyOutDir: true,
    rollupOptions: {
      input: mode === 'production' ? './index.html' : undefined
    }
  },
  ssr: {
    target: 'webworker',
    noExternal: true
  }
}))