import Vue from 'vue'
import axios from 'axios'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

export default new Vuex.Store({
  plugins: [createPersistedState()],
  state: {
    data: {},
    arrayForUserAdditInfo: [],
    apiUrl: 'https://randomuser.me/api/'
  },
  mutations: {
    setData(state, data) {
      state.data = data
    },
    // setArrayForUserAdditInfo(state, indexOfUser) {
    //   state.arrayForUserAdditInfo.forEach((elem, indexOfArray) => {
    //     if (elem == true && indexOfUser != indexOfArray) {
    //       Vue.set(state.arrayForUserAdditInfo, indexOfArray, false)
    //     }
    //   })
    //   Vue.set(state.arrayForUserAdditInfo, indexOfUser, !state.arrayForUserAdditInfo[indexOfUser])
    //   console.log(state.arrayForUserAdditInfo[indexOfUser])
    // }
  },
  actions: {
    updateData(ctx, howMany) {
      axios.get(ctx.state.apiUrl + '?results=' + howMany).then(res => {
        ctx.commit('setData', res.data)
        console.log("Status request: ", res.status)
        // console.log("store: ", res.data.results[0].name)
      })
    }
  },
  getters: {
    getData(state) {
      return state.data
    },
    // getArrayForUserAdditInfo(state) {
    //   return state.arrayForUserAdditInfo
    // }
  }
})