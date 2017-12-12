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
  cur_page_idx: 0
}

// getters
const getters = {
  pages: state => state.lists,
  curPage: state => state.lists[state.cur_page_idx]
}

// actions
const actions = {}

// mutations
const mutations = {
  [types.SET_CUR_PAGE_INDEX] (state, idx) {
    state.cur_page_idx = idx
  },
  [types.ADD_TO_PAGE] (state, comp) {
    let curPage = state.lists[state.cur_page_idx]
    curPage && curPage.comps.push(comp)
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
