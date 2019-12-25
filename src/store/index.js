import Vue from 'vue'
import Vuex from 'vuex'

import books from './books'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    books
  },
  mutations: {
    updateState(state, newState) {
      Object.assign(state, newState)
    }
  },
  actions: {
    loadState({ commit }) {
      const savedState = localStorage.getItem('state')
      if (savedState) {
        commit('updateState', JSON.parse(JSON.parse(savedState)))
      }
    },
    saveState(context, newState) {
      const newStateString = JSON.stringify(newState)
      localStorage.setItem('state', newStateString)
    }
  }
})

store.dispatch('loadState')

store.watch(
  state => {
    return JSON.stringify(state)
  },
  state => {
    store.dispatch('saveState', state)
  }
)

export default store
