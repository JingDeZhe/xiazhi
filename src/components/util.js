import Swal from 'sweetalert2'

export function showTip(msg) {
  Swal.fire({
    position: 'top',
    text: msg,
    showConfirmButton: false,
    timer: 1000,
  })
}
