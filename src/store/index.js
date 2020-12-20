import Vue from 'vue'
import axios from 'axios'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

export default new Vuex.Store({
  plugins: [createPersistedState()],
  state: {
    data: {},
    selectedID: null,
    allGenders: {},
    popupIsActive: false,
    apiUrl: 'https://randomuser.me/api/'
  },
  mutations: {
    setData(state, value) {  state.data = value  },
    setSelectedID(state, indexOfUser) {  state.selectedID = indexOfUser  },
    setPopupIsActive(state, value) {  state.popupIsActive = value  },

    setInfoAboutGenders(state, value) {
      let male = 0, female = 0
      value.forEach(elem => {
        elem.gender == 'male'? male++ : female++
      })
      state.allGenders = {male, female}
    }
  },
  actions: {
    async updateData({state, commit}, howMany) {
      let res = await axios.get(state.apiUrl + '?results=' + howMany)
        
      console.log("Status request: ", res.status)
      commit('setData', res.data.results)
      commit('setInfoAboutGenders', res.data.results)

      return false
    }
  },
  getters: {
    getData: ({data}) => data,
    getSelectedID: ({selectedID}) => selectedID,
    getPopupIsActive: ({popupIsActive}) => popupIsActive,
    getInfoAboutGenders: ({allGenders}) => allGenders
  }
})