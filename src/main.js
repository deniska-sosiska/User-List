import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import * as VueSpinnersCss from "vue-spinners-css";

import store from './store/index'
import App from './App.vue'

Vue.config.productionTip = false
Vue.use(VueAxios, axios)
Vue.use(VueSpinnersCss)

new Vue({
  render: h => h(App),
  store
}).$mount('#app')
