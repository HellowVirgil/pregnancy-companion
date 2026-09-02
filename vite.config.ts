import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// GitHub Pages 项目站点部署在 /pregnancy-companion/ 子路径下
export default defineConfig({
  plugins: [react()],
  base: '/pregnancy-companion/',
})
