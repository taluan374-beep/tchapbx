import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/tchapbx/', // GitHub Pages repository name
  build: {
    outDir: 'dist',
    sourcemap: false,
    minify: 'esbuild',
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          motion: ['framer-motion'],
          syntax: ['react-syntax-highlighter'],
        },
      },
    },
  },
  // Optimize for performance
  optimizeDeps: {
    include: ['react', 'react-dom', 'framer-motion'],
  },
})
