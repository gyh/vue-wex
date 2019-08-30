import Vue from 'vue'
import App from './App'

import pageHead from './components/page-header.vue'
import pageSearchHead from './components/page-search-head.vue'

Vue.component('page-head',pageHead)
Vue.component('page-search-head',pageSearchHead)

App.mpType = 'app'
const app = new Vue({
  ...App
})
app.$mount();