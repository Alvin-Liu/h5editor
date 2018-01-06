import * as types from '../types'
import dComps from '@/components/data.js'
import { deepClone } from '@/utils'
const state = {
  lists: [
    {
      id: 1,
      style: {},
      comps: []
    },
    {
      id: 2,
      style: {},
      comps: []
    },
    {
      id: 3,
      style: {},
      comps: []
    }
  ],
  curPageId: 1,
  curCompData: {}
}

// getters
const getters = {
  pages: state => state.lists,
  curPageId: state => state.curPageId,
  curPage: state => state.lists
    .find((itm) => itm.id === state.curPageId)
}

// actions
const actions = {}

// mutations
const mutations = {
  [types.SET_CUR_COMP] (state, compData) {
    state.curCompData = compData
  },
  [types.EDIT_COMP] (state, { type, value }) {
    let compData = state.curCompData
    Object.assign(compData[type], value)
  },
  [types.SET_CUR_PAGE_INDEX] (state, idx) {
    state.curPageId = idx
  },
  [types.ADD_COMP] (state, comp) {
    let curPage = state.lists
      .find((itm) => itm.id === state.curPageId)
    const compData = dComps[comp.name]
    curPage && compData && curPage.comps.push(deepClone(compData))
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
