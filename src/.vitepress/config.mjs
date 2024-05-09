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
  ],
  themeConfig: {
    sidebar: generateSidebar(),
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
