const { generateSidebar } = require('./util/generate')
const { defineConfig } = require('vitepress')

const config = defineConfig({
  base: '/xiazhi/',
  outDir: '../public',
  title: '夏至',
  themeConfig: {
    sidebar: generateSidebar(),
  },
})

module.exports = config
