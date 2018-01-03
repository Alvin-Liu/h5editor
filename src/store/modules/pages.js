import * as types from '../types'

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
  curPageId: 1
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
  [types.EDIT_COMP] (state, payload) {
    console.log(payload)
    Object.assign(payload.comp[payload.type], payload.value)
  },
  [types.SET_CUR_PAGE_INDEX] (state, idx) {
    state.curPageId = idx
  },
  [types.ADD_TO_PAGE] (state, comp) {
    let curPage = state.lists
      .find((itm) => itm.id === state.curPageId)
    curPage && curPage.comps.push(comp)
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
