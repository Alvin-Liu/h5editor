import * as types from '../types'
import dComps from '@/components/data.js'
import { deepClone } from '@/utils'

const defaulePageData = {
  id: 1,
  css: {},
  props: {},
  comps: []
}

const getDefaultPageData = (coverObj = {}) => {
  let copy = deepClone(defaulePageData)
  return Object.assign(copy, coverObj)
}

const state = {
  lists: [getDefaultPageData()],
  curPageId: 1,
  sum: 1,
  curCompData: {}
}

const getters = {
  pages: state => state.lists,
  curPageId: state => state.curPageId,
  curPage: state => state.lists
    .find((itm) => itm.id === state.curPageId)
}

const actions = {}

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
  [types.ADD_PAGE] (state, payload = {}) {
    state.sum += 1
    const custom = {
      ...payload,
      id: state.sum
    }
    state.lists.push(getDefaultPageData(custom))
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
