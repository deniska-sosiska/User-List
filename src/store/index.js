import Vue from 'vue'
import axios from 'axios'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

export default new Vuex.Store({
  plugins: [createPersistedState()],
  state: {
    data: {},
    apiUrl: 'https://randomuser.me/api/'
  },
  mutations: {},
  actions: {},
  getters: {}
})