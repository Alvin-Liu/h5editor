import * as types from '../types'

const state = {
  lists: []
}

// getters
const getters = {
  complists: state => state.lists
}

// actions
const actions = {}

// mutations
const mutations = {
  [types.ADD_TO_CTN] (state, comp) {
    state.lists.push(comp)
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
