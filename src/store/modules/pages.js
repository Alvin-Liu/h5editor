import * as types from '../types'
import dComps from '@/components/data.js'
import { getNewComp, getNewPage } from '@/api/actions'
import { deepClone } from '@/utils'

const state = {
  lists: [],
  curPageId: null,
  curCompId: null
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
        commit('ADD_PAGE', page)
        return page.id
      })
  },
  addNewCompo ({ commit }, name) {
    getNewComp()
      .then((compo) => {
        const compData = dComps[name]
        commit('ADD_COMP', Object.assign(deepClone(compData), compo))
      })
  }
}

const mutations = {
  [types.TOGGLE_COMP] (state, id) {
    state.curCompId = id
  },
  [types.EDIT_COMP] (state, { type, value }) {
    const page = state['lists'].find((p) => p.id === state.curPageId)
    if (page) {
      const compo = page.comps.find((cp) => cp.id === state.curCompId)
      if (compo) {
        Object.assign(compo[type], value)
      }
    }
  },
  [types.TOGGLE_PAGE] (state, pageId) {
    state.curPageId = pageId
  },
  [types.ADD_PAGE] (state, pageData) {
    pageData && state.lists.push(pageData)
  },
  [types.ADD_COMP] (state, compData) {
    let curPage = state.lists
      .find((itm) => itm.id === state.curPageId)
    curPage && compData && curPage.comps.push(compData)
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
