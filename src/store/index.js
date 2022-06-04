import Vue from 'vue'
import Vuex from 'vuex'
import payload from '@/assets/payload.json'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    paper:           null,
    selectedProfile: null
  },
  mutations: {
    setPaper(state, paper) {
      state.paper = paper
    },
    setSelectProfile(state, profile) {
      state.selectedProfile = profile
    }
  },
  actions: {
    async fetchPaperDetail({ commit }) {
      // payload should come from an async api call, we must to try catch the api call
      // and once obtained data commit to state or if fails show info message to the user
      commit('setPaper', payload)
    }
  }
})
