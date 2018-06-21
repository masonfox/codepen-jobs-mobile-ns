import Vue from 'nativescript-vue'
import App from './views/AppView'

const store = require('./store')

new Vue({
  store,
  created () {
    store.dispatch('fetchJobs')
    store.dispatch('fetchFavorites')
  },
  render: h => h(App),
}).$start();
