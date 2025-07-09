import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    host: '0.0.0.0', // 监听所有IP地址
    port: 5173,      // 指定端口号
    strictPort: true, // 如果端口被占用直接退出
    open: false      // 不自动打开浏览器
  }
})
