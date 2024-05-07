import { onMounted } from 'vue'
import anime from 'animejs'

//#region demo1
export const demo1 = () => {
  onMounted(() => {
    anime({
      targets: '#p1',
      points: [
        { value: '20,20 50,50 70,30' },
        { value: '30,30 70,90 90,10' },
        { value: '20,20 50,50 70,30' },
      ],
      easing: 'easeOutQuad',
      duration: 2000,
      loop: true,
    })
  })
}
//#endregion demo1
