const { globSync } = require('glob')
const path = require('path')
const fs = require('fs')

const DOCS_DIR = '/docs/'

function generateSidebar() {
  try {
    const files = globSync('**/*.@(md|html)', {
      cwd: path.resolve(__dirname, `../..${DOCS_DIR}`),
    })
    const menuMap = new Map()
    files.forEach((file) => {
      const info = path.parse(file)
      const title = info.name.replace(/^[\d\-]*/, '')
      const dirs = info.dir.split(/[\\/]/).filter((v) => !!v)
      let t = menuMap
      dirs.forEach((dir) => {
        dir = dir.replace(/^[\d\-]*/, '')
        if (!t.has(dir)) t.set(dir, new Map())
        t = t.get(dir)
      })
      t.set(title, {
        text: title,
        link: path.join(DOCS_DIR, file),
      })
    })
    const fn = (title, value, items) => {
      if (value instanceof Map) {
        const items2 = []
        items.push({
          text: title,
          items: items2,
          collapsed: true,
        })
        for (const [k, v] of value) {
          fn(k, v, items2)
        }
      } else {
        items.push(value)
      }
    }

    const menu = []
    fn('_', menuMap, menu)

    return menu[0].items
  } catch (err) {
    return err
  }
}

//#region test
fs.writeFile(
  'config-preview.json',
  JSON.stringify(generateSidebar(), null, '  '),
  (err) => {}
)
//#endregion

module.exports = {
  generateSidebar,
}
