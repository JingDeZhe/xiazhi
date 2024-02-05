import { globSync } from 'glob'
import fs from 'node:fs'
import { dirname, join, parse } from 'node:path'
import { fileURLToPath } from 'node:url'

const DOCS_DIR = '/docs/'
const __dirname = dirname(fileURLToPath(import.meta.url))
const resolve = (p) => join(__dirname, p)

export function generateSidebar() {
  try {
    const files = globSync('**/*.@(md|html)', {
      cwd: resolve(`../..${DOCS_DIR}`),
    })
    files.sort(new Intl.Collator('zh-CN').compare)
    const menuMap = new Map()
    files.forEach((file) => {
      const info = parse(file)
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
        link: join(DOCS_DIR, file).replace(/\\/g, '/'),
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
