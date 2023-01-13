import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
const path = require("path")
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  },
  server: {
    host: '0.0.0.0',
    port: 8080,
    // proxy: {
    //   '/api': {
    //     target: 'http://****',
    //     changeOrigin: true,
    //     rewrite: (path) => path.replace(/^\/is/, '')
    //   }
    // }
  }
})
