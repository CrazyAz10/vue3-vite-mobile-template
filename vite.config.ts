import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
// import DefineOptions from 'unplugin-vue-define-options/vite'
import vuesetupExtend from 'vite-plugin-vue-setup-extend'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  define: {
    __VUE_I18N_FULL_INSTALL__: true,
    __VUE_I18N_LEGACY_API__: true,
    __INTLIFY_PROD_DEVTOOLS__: false
  },
  // 代理设置
  // server: {
  //   proxy: {
  //     '/api': {
  //       target: 'http://127.0.0.1:3000/api',
  //       rewrite: (path) => path.replace(/^\/api/, '') // 不可省略
  //     }
  //   }
  // },
  plugins: [
    vue(),
    // DefineOptions(),
    vuesetupExtend()
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
