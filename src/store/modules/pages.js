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

const getDefaultCompData = ({ name, coverObj = {} }) => {
  const compData = dComps[name]
  return Object.assign(deepClone(compData), coverObj)
}

const state = {
  lists: [getDefaultPageData()],
  curPageId: 1,
  page_sum: 1,
  comp_sum: 0,
  curCompId: null
}

const getters = {
  pages: state => state.lists,
  curPageId: state => state.curPageId,
  curPage: state => state.lists
    .find((itm) => itm.id === state.curPageId)
}

const actions = {}

const mutations = {
  [types.SET_CUR_COMP] (state, id) {
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
  [types.SET_CUR_PAGE_INDEX] (state, idx) {
    state.curPageId = idx
  },
  [types.ADD_PAGE] (state, payload = {}) {
    state.page_sum += 1
    const custom = {
      ...payload,
      id: state.page_sum
    }
    state.lists.push(getDefaultPageData(custom))
  },
  [types.ADD_COMP] (state, comp) {
    let curPage = state.lists
      .find((itm) => itm.id === state.curPageId)
    state.comp_sum += 1
    const compData = getDefaultCompData({
      name: comp.name,
      coverObj: {
        id: state.comp_sum
      }
    })
    curPage && compData && curPage.comps.push(compData)
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
