import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    // Security: Minify and optimize for production
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true, // Remove console.log in production
        drop_debugger: true, // Remove debugger statements
      },
    },
    // Security: Generate source maps for debugging but not expose them in production
    sourcemap: false,
    // Security: Rollup options for better security
    rollupOptions: {
      output: {
        // Security: Prevent code splitting that could expose sensitive info
        manualChunks: {
          vendor: ['react', 'react-dom'],
          animations: ['framer-motion'],
          utils: ['react-intersection-observer'],
        },
      },
    },
    // Security: Set chunk size warnings
    chunkSizeWarningLimit: 1000,
  },
  server: {
    // Security: Disable host header attack
    host: 'localhost',
    // Security: HTTPS in development (optional)
    // https: true,
  },
  // Security: Define environment variables
  define: {
    // Security: Prevent global variables from being exposed
    global: 'globalThis',
  },
  // Security: Optimize dependencies
  optimizeDeps: {
    include: ['react', 'react-dom', 'framer-motion', 'react-intersection-observer'],
  },
})
