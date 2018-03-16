import * as types from '../types'
import { getNewPageId, getNewPage } from '../functions'
import { deepClone } from '@/utils'

const state = {
  lists: [],
  curPageId: null
}

const getters = {
  pages: (state) => state.lists,
  curPageId: (state) => state.curPageId || state.lists[0]['id'],
  curPage: (state) => {
    return state.lists
      .find(
        (itm) => itm.id === state.curPageId
      ) || state.lists[0]
  },
  getPageConfigByPageId: (state) => (pageId) => {
    return state.lists.find((cp) => cp.id === pageId)
  }
}

const actions = {
  addNewPage ({ commit }) {
    const page = getNewPage()
    if (page) {
      commit('ADD_PAGE', page)
    }
    return page.id
  },
  insertPage ({ commit }, prePageId) {
    const page = getNewPage()
    if (page) {
      commit('INSERT_PAGE', {
        page,
        pageId: prePageId
      })
    }
    return page.id
  },
  copyPage ({ commit }, pageId) {
    const id = getNewPageId()
    if (id) {
      commit('COPY_PAGE', {
        prePageId: pageId,
        pageId: id
      })
    }
    return id
  },
  removePage ({ commit }, pageId) {
    commit('REMOVE_PAGE', pageId)
    return pageId
  },
  openEditPage ({ commit }, pageId) {
    commit('OPEN_PROPS_PANEL', {
      name: 'PagePropConfig',
      id: pageId
    })
  }
}

const mutations = {
  [types.TOGGLE_PAGE] (state, pageId) {
    state.curPageId = pageId
  },
  [types.ADD_PAGE] (state, pageData) {
    state.lists.push(pageData)
  },
  [types.INSERT_PAGE] (state, { page, pageId }) {
    const index = state.lists.findIndex((page) => page.id === pageId)
    if (index > -1) {
      state.lists.splice(index + 1, 0, page)
      state.curPageId = page.id
    }
  },
  [types.COPY_PAGE] (state, { prePageId, pageId }) {
    const lists = state.lists
    const index = lists.findIndex((page) => page.id === prePageId)
    if (index > -1) {
      let pageData = deepClone(lists[index])
      pageData.id = pageId
      lists.splice(index + 1, 0, pageData)
      state.curPageId = pageId
    }
  },
  [types.REMOVE_PAGE] (state, pageId) {
    const lists = state.lists
    const index = lists.findIndex((page) => page.id === pageId)
    if (index > -1) {
      lists.splice(index, 1)
      const nextActivePage = lists[index] || lists[index - 1]
      state.curPageId = nextActivePage['id']
    }
  },
  [types.EDIT_PAGE] (state, { type, value, pageId }) {
    let page = state.lists.find((pg) => pg.id === pageId || pg.id === state.curPageId)
    if (page) {
      let pageProp = page[type]
      for (let key in value) {
        if (pageProp[key] === undefined) {
          continue
        }
        if (typeof value[key] === 'object') {
          Object.assign(pageProp[key], value[key])
        } else {
          pageProp[key] = value[key]
        }
      }
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
