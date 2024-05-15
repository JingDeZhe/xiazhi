import Swal from 'sweetalert2'
import ky from 'ky'
import { nanoid } from 'nanoid'
import { withBase } from 'vitepress'

export const showTip = (msg) => {
  Swal.fire({
    position: 'top',
    text: msg,
    showConfirmButton: false,
    timer: 1000,
  })
}

export const isAbsoluteUrl = (url) => {
  var absoluteUrlPattern = /^(ftp|http|https):\/\/[^ "]+$/
  return absoluteUrlPattern.test(url)
}

const STORE_PATH = 'https://store-1258290249.cos.ap-guangzhou.myqcloud.com/'
export const http = ky.create({
  prefixUrl: import.meta.env.PROD ? STORE_PATH : import.meta.env.BASE_URL,
})

export const getStoreUrl = (url) => {
  return `${STORE_PATH}${url}`
}

export const getSrc2 = (src, fit = false) => {
  if (isAbsoluteUrl(src)) return src
  if (!fit) return withBase(src)
  return import.meta.env.PROD ? `${STORE_PATH}${src}` : withBase(src)
}

export const uid = () => nanoid()
