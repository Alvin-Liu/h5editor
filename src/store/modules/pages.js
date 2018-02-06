import * as types from '../types'
import { getNewPage } from '@/api/actions'

const state = {
  lists: [],
  curPageId: null
}

const getters = {
  pages: state => state.lists,
  curPageId: state => state.curPageId || state.lists[0]['id'],
  curPage: state => state.lists
    .find((itm) => itm.id === state.curPageId) || state.lists[0]
}

const actions = {
  initH5Editor ({ dispatch, commit }) {
    dispatch('addNewPage')
      .then((id) => {
        commit('TOGGLE_PAGE', id)
      })
  },
  addNewPage ({ commit }) {
    return getNewPage()
      .then((page) => {
        if (page) {
          commit('ADD_PAGE', page)
        }
        return page.id
      })
  },
  removePage ({ commit }, pageId) {
    commit('REMOVE_PAGE', pageId)
  }
}

const mutations = {
  [types.TOGGLE_PAGE] (state, pageId) {
    state.curPageId = pageId
  },
  [types.ADD_PAGE] (state, pageData) {
    state.lists.push(pageData)
  },
  [types.REMOVE_PAGE] (state, pageId) {
    const index = state.lists.findIndex((page) => page.id === pageId)
    if (index > -1) {
      state.lists.splice(index, 1)
    }
  },
  [types.ADD_COMP_TO_PAGES] (state, compData) {
    const curPage = state.lists.find((page) => page.id === state.curPageId)
    if (curPage) {
      curPage.comps.push(compData)
    }
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
