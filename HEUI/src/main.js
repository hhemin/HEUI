import Vue from 'vue'
import App from './App.vue'

import HEUI from './index.js'
Vue.use(HEUI)

new Vue({
  el: '#app',
  render: h => h(App)
})
