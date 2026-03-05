import { build } from 'vite'
import fs from 'fs'
import path from 'path'

async function buildAll() {
  // Build client
  await build({
    build: {
      outDir: 'dist/client',
      emptyOutDir: true
    }
  })

  // Create worker directory
  fs.mkdirSync('dist/_worker.js', { recursive: true })
  
  // Copy worker file
  fs.copyFileSync('worker/index.js', 'dist/_worker.js/index.js')
  
  console.log('✅ Build completed!')
}

buildAll().catch(console.error)