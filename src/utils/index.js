import Swal from 'sweetalert2'
import ky from 'ky'
import { nanoid } from 'nanoid'

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

export const http = ky.create({
  prefixUrl: import.meta.env.PROD
    ? 'https://store-1258290249.cos.ap-guangzhou.myqcloud.com/'
    : import.meta.env.BASE_URL,
})

export const uid = () => nanoid()
