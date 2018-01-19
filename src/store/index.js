import Vue from 'vue'
import Vuex from 'vuex'
import * as types from './types'
import pages from './modules/pages'

import { local } from '@/utils'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  actions: {
    getUserData ({ commit, dispatch }) {
      const userData = localStorage.getItem('UserData')
      if (userData) {
        try {
          const curUserData = JSON.parse(userData)
          commit('INIT_USER_DATA', curUserData)
        } catch (e) {
          console.error('获取数据失败:' + e.message)
        }
      } else {
        dispatch('initH5Editor')
      }
    },
    saveUserData ({ state }) {
      local.set('UserData', JSON.stringify({
        pages: {
          lists: state.pages.lists
        }
      }))
    }
  },
  mutations: {
    [types.INIT_USER_DATA] (state, userData) {
      Object.assign(state.pages, userData.pages)
    }
  },
  modules: {
    pages
  },
  strict: debug
})
