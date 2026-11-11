import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/',
  plugins: [react()],
  esbuild: {
    drop: ['console', 'debugger'],
  },
  build: {
    target: 'es2015',
    emptyOutDir: true,
    cssMinify: true,
    reportCompressedSize: false,
    chunkSizeWarningLimit: 1200,
    rollupOptions: {
      output: {
        entryFileNames: 'assets/[name].[hash].js',
        chunkFileNames: 'assets/[name].[hash].js',
        assetFileNames: 'assets/[name].[hash].[ext]',
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (id.includes('react') || id.includes('react-dom') || id.includes('react-router')) {
              return 'vendor'; // core react libraries
            }
            if (id.includes('firebase')) {
              return 'firebase'; // firebase logic
            }
            if (id.includes('lucide-react')) {
              return 'icons';
            }
            if (id.includes('@capacitor')) {
              return 'capacitor';
            }
          }
        }
      }
    }
  },
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:5000',
        changeOrigin: true
      }
    }
  }
})
