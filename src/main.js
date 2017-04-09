// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

// BootstrapVue
import BootstrapVue from 'bootstrap-vue'
Vue.use(BootstrapVue)

// vue-color
import { Chrome } from 'vue-color'
Vue.component('chrome-picker', Chrome)

// Vuex
import Vuex from 'vuex'
Vue.use(Vuex)
var store = new Vuex.Store({
  state: {
    year: 2014,
    color: '#1DA1F2'
  },
  getters: {
    colorPickerObject (state) {
      return { hex: state.color }
    }
  },
  mutations: {
    updateYear (state, year) {
      state.year = year
    }
  }
})

// Offline-First
import * as OfflinePluginRuntime from 'offline-plugin/runtime'
OfflinePluginRuntime.install()

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  store,
  components: { App }
})
