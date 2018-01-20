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
          const pages = curUserData.pages
          commit('INIT_USER_DATA', curUserData)
          if (pages && pages.lists && pages.lists.length) {
            commit('TOGGLE_PAGE', pages.lists[0]['id'])
          }
        } catch (e) {
          dispatch('initH5Editor')
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
