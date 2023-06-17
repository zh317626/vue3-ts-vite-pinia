import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from "path"; //这个path用到了上面安装的@types/node
import viteCompression from 'vite-plugin-compression'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(),
  {
    ...viteCompression(), // 打包生成 .gz 插件仅需在打包时使用
    apply: 'build',
  },
  ],
  //这里进行配置别名
  resolve: {
    alias: {
      "@": path.resolve("./src"), // @代替src
      "#": path.resolve("./types"), // #代替types
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: '@import "@/assets/styles/index.scss";',
      }
    }
  },
  /**
   * 打包配置
   * 分包处理
   */
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vue: ['vue', 'pinia', 'vue-router'],
          elementIcons: ['@element-plus/icons-vue'],
        },
        chunkFileNames: "static/js/[name]-[hash].js",
        entryFileNames: "static/js/[name]-[hash].js",
        assetFileNames: "static/[ext]/[name]-[hash].[ext]",
      },
    },
  },
  // 代理
  // server: {
  //   host: '0.0.0.0',
  //   port: 8080,
  //   open: true,
  //   https: false,
  //   proxy: {
  //     '/api': {
  //       target: '要代理的地址',
  //       changeOrigin: true,
  //       ws: true,
  //       rewrite: (path: string) => path.replace(/^\/api/, ''),
  //     },
  //   },
  // },
})
