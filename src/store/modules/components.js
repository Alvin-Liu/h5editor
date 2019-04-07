import * as types from '../types'
import { getNewComp } from '../functions'

const BASE_COMP_SUFFIX = 'Data'

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
    const compData = getNewComp(name + BASE_COMP_SUFFIX)
    if (compData) {
      const newCompData = Object.assign(compData, { parentId: getters.curPageId })
      commit('ADD_COMP_TO_PAGES', newCompData)
      commit('ADD_COMP', newCompData)
    }
  },
  removeComp ({ commit, getters }, compId) {
    const index = state.lists.findIndex(cm => cm.id === compId)
    if (index > -1) {
      commit(types.CLOSE_PROPS_PANEL)
      commit(types.REMOVE_COMP_FROM_PAGES, compId)
      commit(types.REMOVE_COMP, index)
    }
  }
}

const mutations = {
  [types.TOGGLE_COMP] (state, id) {
    state.curCompId = id
  },
  [types.EDIT_COMP] (state, { type, value, compid }) {
    const comp = state.lists.find((cp) => cp.id === compid || cp.id === state.curCompId)
    if (comp) {
      let compProp = comp[type]
      // 简单处理对象，默认为纯对象（没有数组等类型）
      for (let key in value) {
        if (compProp[key] === undefined) {
          continue
        }
        if (typeof value[key] === 'object') {
          Object.assign(compProp[key], value[key])
        } else {
          compProp[key] = value[key]
        }
      }
    }
  },
  [types.ADD_COMP] (state, compData) {
    state.lists.push(compData)
  },
  [types.REMOVE_COMP] (state, index) {
    state.lists.splice(index, 1)
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
