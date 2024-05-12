import DefaultTheme from 'vitepress/theme'
import './custom.css'
import 'sweetalert2/src/sweetalert2.scss'
import MyIframe from './components/MyIframe.vue'
import MyA from './components/MyA.vue'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component('my-iframe', MyIframe)
    app.component('my-a', MyA)
  },
}
