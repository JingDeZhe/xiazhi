const { generateSidebar } = require('./util/generate')
const { defineConfig } = require('vitepress')

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

module.exports = config
