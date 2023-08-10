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
  ],
  themeConfig: {
    sidebar: generateSidebar(),
  },
})

export default config
