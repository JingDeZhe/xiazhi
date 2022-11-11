const { generateSidebar } = require('./util/generate')
const { defineConfig } = require('vitepress')
const fs = require('fs')

const config = defineConfig({
  base: '/xiazhi/',
  outDir: '../public',
  title: '夏至',
  themeConfig: {
    sidebar: generateSidebar(),
  },
})

fs.writeFile(
  'config-preview.json',
  JSON.stringify(config, null, '  '),
  (err) => {}
)

module.exports = config
