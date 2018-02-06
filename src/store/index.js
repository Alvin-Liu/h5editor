import Vue from 'vue'
import Vuex from 'vuex'
import * as types from './types'

import pages from './modules/pages'
import components from './modules/components'

import { local } from '@/utils'

Vue.use(Vuex)

const SAVE_KEY_NAME = 'UserData'

export default new Vuex.Store({
  state: {
    versior: 0.21,
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
    getUserData ({ state, commit, dispatch }) {
      const userData = localStorage.getItem(SAVE_KEY_NAME)
      if (userData) {
        try {
          const curUserData = JSON.parse(userData)
          if (curUserData.versior && (curUserData.versior >= state.versior)) {
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
      local.set(SAVE_KEY_NAME, JSON.stringify({
        versior: state.versior,
        pages: {
          lists: state.pages.lists
        }
      }))
    }
  },
  mutations: {
    [types.INIT_USER_DATA] (state, userData) {
      state.versior = userData.versior
      state.pages.lists = userData.pages.lists
      state.components.lists = userData.pages.lists.reduce((lists, page) => {
        if (page) {
          return lists.concat(page.comps)
        }
      }, [])
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
  strict: process.env.NODE_ENV !== 'production'
})
