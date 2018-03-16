import Vue from 'vue'
import Router from 'vue-router'

import index from '@/views/index.vue'
import preview from '@/views/preview.vue'

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
