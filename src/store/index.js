import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    count: 1
  },
  getters: {
    count: state => state.count
  },
  mutations: {
    addcount (state, count) {
      state.count = count
    }
  },
  actions: {
    addcount (context, count) {
      context.commit('addcount', count)
    }
  }
})

export default store
