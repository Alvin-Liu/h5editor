// import 'babel-polyfill'
import Vue from 'vue'
import store from '@/store'
import ElementUI from 'element-ui'
import App from '@/App'
import router from '@/router'
import calcStyle from '@/filters/calc-style.js'
import 'element-ui/lib/theme-chalk/index.css'
import 'animate.css'
import '@/assets/css/swiper.css'
import '@/assets/styles/ui.scss'
import UIComps from '@/components/ui/index.js'
import flexible from '@/utils/lib-flexible.js'
import { isMobile } from '@/utils/index.js'

Vue.use(ElementUI)

Vue.prototype.$log = console.log.bind(console)

Object.keys(UIComps).forEach((name) => {
  Vue.component(name, UIComps[name])
})

Vue.filter('calcStyle', calcStyle)

Vue.config.productionTip = false

if (isMobile) {
  document.body.classList.add('is-mobile')
  router.push('/mobile')
  flexible()
}

// window.addEventListener('resize', () => {

// })

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App)
})
