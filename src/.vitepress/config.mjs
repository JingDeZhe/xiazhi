import { defineConfig } from 'vitepress'
import { fileURLToPath, URL } from 'node:url'
import UnoCSS from 'unocss/vite'
import { generateSidebar } from './util/generate.mjs'

const config = defineConfig({
  base: '/',
  outDir: '../dist',
  lang: 'zh-CN',
  title: '读书笔记',
  head: [
    ['link', { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    [
      'link',
      {
        rel: 'stylesheet',
        href: 'https://cdn.bootcdn.net/ajax/libs/firacode/6.2.0/fira_code.css',
      },
    ],
    [
      'link',
      {
        rel: 'stylesheet',
        href: 'https://cdnjs.cloudflare.com/ajax/libs/glightbox/3.3.0/css/glightbox.min.css',
      },
    ],
    [
      'link',
      {
        rel: 'stylesheet',
        href: 'https://cdnjs.cloudflare.com/ajax/libs/hint.css/3.0.0/hint.min.css',
      },
    ],
  ],
  themeConfig: {
    sidebar: generateSidebar(),
    outlineTitle: '导航',
    docFooter: {
      prev: '上篇',
      next: '下篇',
    },
    darkModeSwitchTitle: '暗色模式',
    lightModeSwitchTitle: '浅色模式',
    notFound: {
      code: '404',
      title: '页面丢失',
      quote: '你来到了空无一物之处',
      linkText: '回归主页',
    },
    outline: {
      level: [2, 3],
    },
    footer: {
      message:
        '<a href="https://beian.miit.gov.cn/" target="_blank">鄂ICP备19001457号-1</a>',
    },
  },
  markdown: {
    math: true,
  },
  vite: {
    server: { port: 5174 },
    plugins: [UnoCSS()],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('../', import.meta.url)),
      },
    },
    css: {
      preprocessorOptions: {
        scss: {
          api: 'modern-compiler',
        },
      },
    },
  },
})

export default config
