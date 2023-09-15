import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
// autoprefixer postcss-pxtorem 实现自适应
//多页面配置 rollupOptions vite-plugin-html配置
// 多入口 （input :{login:path.resolve(__dirname,"src/page/login.html")}）
// 多出口 createHtmlPlugin({minify:true,page:[{entry:"/login/main.tsx",template:"/login.html",filename:"login.html"}]})
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), vueJsx()],
  resolve: {
    alias: {
      '@': fileURLToPath(
        new URL('./src', import.meta.url)
      )
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "./src/style/minxin.scss";`
      }
    }
  },

  server: {
    host: '0.0.0.0', //使用当前的IP地址，没有这个就是以localhost作为本地地址
    port: 3000, //端口号为3000
    open: false, //是否在默认浏览器中自动打开该地址
    proxy: {
      //使用代理
      '/koaurl': {
        //当有 /api开头的地址是，代理到target地址
        target: 'http://127.0.0.1:5000/api/v1/', // 需要跨域代理的本地路径
        changeOrigin: true, //是否改变请求源头
        rewrite: (path) =>
          path.replace(/^\/koaurl/, '') // 路径重写
      }
    }
  }
})
