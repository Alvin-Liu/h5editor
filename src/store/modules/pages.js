import * as types from '../types'
import { getNewPageId, getNewPage } from '../functions'
import { deepClone, objectArray } from '@/utils'

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
      commit(types.ADD_PAGE, page)
    }
    return page.id
  },
  insertPage ({ commit }, prePageId) {
    const page = getNewPage()
    if (page) {
      commit(types.INSERT_PAGE, {
        page,
        pageId: prePageId
      })
    }
    return page.id
  },
  copyPage ({ commit }, pageId) {
    const id = getNewPageId()
    if (id) {
      commit(types.COPY_PAGE, {
        prePageId: pageId,
        pageId: id
      })
    }
    return id
  },
  removePage ({ commit }, pageId) {
    commit(types.REMOVE_PAGE, pageId)
    return pageId
  },
  openEditPage ({ commit }, pageId) {
    commit(types.OPEN_PROPS_PANEL, {
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
    state.lists = objectArray.add(state.lists, pageData)
  },
  [types.INSERT_PAGE] (state, { page, pageId }) {
    state.lists = objectArray.insertBefore(state.lists, page, item => item.id === pageId)
    state.curPageId = page.id
  },
  // todo:待处理
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
    const index = objectArray.findIndex(state.lists, (page) => page.id === pageId)
    state.lists = objectArray.del(state.lists, pageId)

    if (index > -1) {
      const nextActivePage = state.lists[index] || state.lists[index - 1]
      state.curPageId = nextActivePage['id']
    }
  },
  [types.EDIT_PAGE] (state, { type, value, pageId }) {
    state.lists = objectArray.update(state.lists, {
      [type]: value
    }, pg => pg.id === pageId || pg.id === state.curPageId)
  },
  [types.ADD_COMP_TO_PAGES] (state, compData) {
    const target = objectArray.find(state.lists, page => page.id === state.curPageId)
    if (target) {
      target.comps = objectArray.add(target.comps, compData)
    }
  },
  [types.REMOVE_COMP_FROM_PAGES] (state, compId) {
    const target = objectArray.find(state.lists, page => state.curPageId === page.id)
    if (target) {
      target.comps = objectArray.del(target.comps, compId)
    }
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
