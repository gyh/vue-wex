import Vue from 'vue'
import App from './App'

import pageHead from './components/page-header.vue'
import pageSearchHead from './components/page-search-head.vue'
import pageSwiper from './components/page-swiper.vue'
import uniIcon from './components/uni-icon/uni-icon.vue'

Vue.component('page-head',pageHead)
Vue.component('page-search-head',pageSearchHead)
Vue.component('page-swiper',pageSwiper)
Vue.component('uni-icon',uniIcon)

App.mpType = 'app'
const app = new Vue({
  ...App
})
app.$mount();