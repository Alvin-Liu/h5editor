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
import { isMobile, flexible } from '@/utils/index.js'

Vue.use(ElementUI)

Vue.prototype.$log = console.log.bind(console)

Vue.filter('calcStyle', calcStyle)

Vue.config.productionTip = false

if (isMobile) {
  document.body.classList.add('is-mobile')
  router.push('/mobile')
  flexible.init()
  store.commit('SET_MOBILE', {
    isMobile: true,
    rem: flexible.rem
  })
}

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App)
})
