import DefaultTheme from 'vitepress/theme'
import './custom.css'
import 'sweetalert2/src/sweetalert2.scss'
import MyIframe from './components/MyIframe.vue'
import MyA from './components/MyA.vue'
import MyGallary from './components/MyGallary.vue'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component('my-iframe', MyIframe)
    app.component('my-a', MyA)
    app.component('my-gallary', MyGallary)
  },
}
