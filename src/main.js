import Vue from 'vue'
import App from './App.vue'

import axios from 'axios'

//global variable
axios.defaults.baseURL = process.env.VUE_APP_API_URL
Vue.prototype.$axios = axios;
Vue.prototype.$api_url = process.env.VUE_APP_API_URL;

new Vue({
  el: '#app',
  render: h => h(App)
})
