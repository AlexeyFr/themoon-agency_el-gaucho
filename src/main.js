import Vue from 'vue'
import App from './App.vue'
import store from './store'

import VueScrollTo from 'vue-scrollto'
Vue.use(VueScrollTo)

import { VueMasonryPlugin } from 'vue-masonry';
Vue.use(VueMasonryPlugin)

import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios, axios)

Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App),
}).$mount('#app')
