import { defineConfig } from 'vitepress'
import { fileURLToPath, URL } from 'node:url'

import { generateSidebar } from './util/generate.mjs'

const config = defineConfig({
  base: '/',
  outDir: '../dist',
  lang: 'zh-CN',
  title: '夏至',
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
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('../', import.meta.url)),
      },
    },
  },
})

export default config
