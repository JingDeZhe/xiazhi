import Swal from 'sweetalert2'
import ky from 'ky'

export const showTip = (msg) => {
  Swal.fire({
    position: 'top',
    text: msg,
    showConfirmButton: false,
    timer: 1000,
  })
}

export const http = ky.create({
  prefixUrl: import.meta.env.PROD
    ? 'https://store-1258290249.cos.ap-guangzhou.myqcloud.com/'
    : import.meta.env.BASE_URL,
})
