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
  mutations: {
    setData(state, data) {
      state.data = data
    }
  },
  actions: {
    updateData(ctx, howMany) {
      axios.get(ctx.state.apiUrl + '?results=' + howMany).then(res => {
        ctx.commit('setData', res.data)
        // console.log("store: ", res.data.results[0].name)
      })
    }
  },
  getters: {
    getData(state) {
      return state.data
    }
  }
})