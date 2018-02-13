import * as types from '../types'
import dComps from '@/components/data.js'
import { getNewComp } from '@/api/actions'
import { deepClone } from '@/utils'

const state = {
  lists: [],
  curCompId: null
}

const getters = {
  getComplistsByPageId: (state) => (pageId) => {
    return state.lists.filter((cp) => cp.parentId === pageId)
  },
  curComp: (state) => {
    return state.lists.find((cp) => cp.id === state.curCompId)
  },
  getCompConfigByCompid: (state) => (compid) => {
    return state.lists.find((cp) => cp.id === compid)
  }
}

const actions = {
  addNewComp ({ commit, getters }, name) {
    getNewComp()
      .then((comp) => {
        const compData = dComps[name]
        if (compData) {
          const newCompData = Object.assign(deepClone(compData), comp, { parentId: getters.curPageId })
          commit('ADD_COMP_TO_PAGES', newCompData)
          commit('ADD_COMP', newCompData)
        }
      })
  }
}

const mutations = {
  [types.TOGGLE_COMP] (state, id) {
    state.curCompId = id
  },
  [types.EDIT_COMP] (state, { type, value, compid }) {
    const comp = state.lists.find((cp) => cp.id === state.curCompId || compid)
    if (comp) {
      console.log(value)
      Object.assign(comp[type], value)
    }
  },
  [types.ADD_COMP] (state, compData) {
    state.lists.push(compData)
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
