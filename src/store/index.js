import Vue from "vue";
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    currentType: 'hot'
  },
  getters: {},
  mutations: {
    changeCurrentType(state,payload) {
      state.currentType = payload
    }
  },
  actions: {
    changeCurrentType(context,payload) {
      context.commit('changeCurrentType',payload)
    }
  },
  modules: {}
})
export default store