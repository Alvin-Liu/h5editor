import Vue from 'vue'
import Vuex from 'vuex'
import * as types from './types'

import pages from './modules/pages'
import components from './modules/components'

import { local } from '@/utils'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  state: {
    versior: 0.1,
    propsPanel: {
      status: false,
      name: '',
      id: ''
    }
  },
  getters: {
    propsPanel: (state) => state.propsPanel
  },
  actions: {
    getUserData ({ commit, dispatch }) {
      const userData = localStorage.getItem('UserData')
      if (userData) {
        try {
          const curUserData = JSON.parse(userData)
          if (curUserData.versior && curUserData.versior >= 0.1) {
            const pages = curUserData.pages
            commit('INIT_USER_DATA', curUserData)
            if (pages && pages.lists && pages.lists.length) {
              commit('TOGGLE_PAGE', pages.lists[0]['id'])
            }
          } else {
            dispatch('initH5Editor')
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
        versior: state.versior,
        pages: {
          lists: state.pages.lists
        },
        components: {
          lists: state.components.lists
        }
      }))
    }
  },
  mutations: {
    [types.INIT_USER_DATA] (state, userData) {
      state.versior = userData.versior
      state.pages.lists = userData.pages.lists
      state.components.lists = userData.components.lists
    },
    [types.OPEN_PROPS_PAANEL] (state, { id, name }) {
      state.propsPanel = {
        status: true,
        name: name,
        id: id
      }
    },
    [types.CLOSE_PROPS_PAANEL] (state) {
      state.propsPanel.status = false
    }
  },
  modules: {
    pages,
    components
  },
  strict: debug
})
