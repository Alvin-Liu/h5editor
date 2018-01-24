// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import store from './store'
import ElementUI from 'element-ui'
import App from './App'
import 'element-ui/lib/theme-chalk/index.css'
import 'animate.css'
import './assets/css/swiper.css'
// import router from './router'
import './styles/ui.scss'

// const clientW = document.body.clientWidth
// const percent = clientW / 320
// document.getElementById('viewport').setAttribute('content', 'width=320, initial-scale=' + percent + ', maximum-scale=' + percent + ', user-scalable=no')

Vue.use(ElementUI)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  // router,
  render: h => h(App)
})
