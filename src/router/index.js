import Vue from 'vue'
import Router from 'vue-router'

import index from '@/view/index.vue'
import preview from '@/view/preview.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/preview',
      name: 'preview',
      component: preview
    }
  ]
})
