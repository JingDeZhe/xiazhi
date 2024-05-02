/**
 * 中文乱序生成
 * v-0.0.1
 */

import { http } from '../../utils/index'
import { randomInt } from './lo'

export class Lorem {
  constructor() {
    this.article = ''
    this.breakIndexs = []
    this.breakLens = 0

    this.breakReg = /[\.,:\?;，。？！：；]/
  }

  async loadUrl(url) {
    return http
      .get(url)
      .text()
      .then((text) => {
        this.loadArticle(text || '')
      })
  }

  loadArticle(article) {
    this.article = article
    this.breakIndexs = [0]
    let i = 0
    for (let c of article) {
      if (this.breakReg.test(c)) {
        this.breakIndexs.push(i)
      }
      i += 1
    }
    this.breakLens = this.breakIndexs.length
  }

  words(len = 1) {
    const t = this.breakIndexs[randomInt(this.breakLens)]
    return this.article.slice(t + 1, t + 1 + len)
  }
}
