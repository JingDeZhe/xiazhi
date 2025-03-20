import { globSync } from 'glob'
import fs from 'node:fs'
import { dirname, join, parse } from 'node:path'
import { fileURLToPath } from 'node:url'
import { compare } from './sort.mjs'

const DOCS_DIR = '/docs/'
const __dirname = dirname(fileURLToPath(import.meta.url))
const resolve = (p) => join(__dirname, p)

export function generateSidebar() {
  try {
    const files = globSync('**/*.@(md|html)', {
      cwd: resolve(`../..${DOCS_DIR}`),
    }).map((v) => {
      return {
        path: v,
        ...parse(v),
      }
    })
    files.sort((a, b) => {
      return new Intl.Collator('zh-CN').compare(a.path, b.path)
    })
    const menuMap = new Map()
    files.forEach((info) => {
      const title = info.name.replace(/^[\d\.\-]*/, '')
      const dirs = info.dir.split(/[\\/]/).filter((v) => !!v)
      if (dirs.find((v) => v === '00-srt')) return
      if (title === 'srt') return
      let t = menuMap
      dirs.forEach((dir) => {
        dir = dir.replace(/^[\d\.\-]*/, '')
        if (!t.has(dir)) t.set(dir, new Map())
        t = t.get(dir)
      })
      t.set(title, {
        text: title,
        link: join(DOCS_DIR, info.path).replace(/\\/g, '/'),
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
    const sidebar = menu[0].items

    return sidebar
  } catch (err) {
    return err
  }
}

//#region test
// fs.writeFile(
//   'config-preview.json',
//   JSON.stringify(generateSidebar(), null, '  '),
//   (err) => {}
// )
//#endregion
