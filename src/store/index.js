import Vue from 'vue'
import Vuex from 'vuex'

import books from './books'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    books
  }
})
