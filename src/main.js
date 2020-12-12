import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'

import store from './store/index'
import App from './App.vue'

Vue.config.productionTip = false
Vue.use( VueAxios, axios)

new Vue({
  render: h => h(App),
  store
}).$mount('#app')