import Vue from 'vue'
import VueRouter from 'vue-router'
import { isMobile } from '@/utils/index.js'

import index from '@/views/index.vue'
import preview from '@/views/preview.vue'
import mobile from '@/views/mobile.vue'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
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
    },
    {
      path: '/mobile',
      name: 'mobile',
      component: mobile
    },
    {
      path: '*',
      component: index
    }
  ]
})

router.beforeEach((to, from, next) => {
  if (isMobile && to.name !== 'mobile') {
    next({ path: '/mobile' })
  } else if (!isMobile && to.name === 'mobile') {
    next({ path: '/' })
  }
  next()
})

export default router
