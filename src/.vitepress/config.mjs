import { defineConfig } from 'vitepress'

import { generateSidebar } from './util/generate.mjs'

const config = defineConfig({
  base: '/xiazhi/',
  outDir: '../dist',
  lang: 'zh-CN',
  title: '夏至',
  head: [
    [
      'link',
      { rel: 'icon', type: 'image/x-icon', href: '/xiazhi/favicon.ico' },
    ],
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
  vite: {
    server: { port: 5174 },
  },
})

export default config
