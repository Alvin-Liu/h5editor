import Vue from 'vue'
import Vuex from 'vuex'
// import * as actions from './actions'
import * as getters from './getters'
// import comps from './modules/comps'
import pages from './modules/pages'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  // actions,
  getters,
  modules: {
    // comps,
    pages
  },
  strict: debug
})
