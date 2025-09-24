import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/chat/', // 👈 penting biar asset/js/css ketemu
  server: {
    proxy: {
      '/api': {
        target: 'hhttps://chatbot-backend-nine-omega.vercel.app/api/chat',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '/api'),
      },
    },
  },
})
