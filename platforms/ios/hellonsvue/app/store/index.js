import Vue from 'nativescript-vue'
import Vuex from 'vuex'
import axios from 'axios'
import appSettings from 'application-settings'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    jobs: [],
    favorites: [],
    jobsDataURL: 'https://codepen.io/jobs.json'
  },
  mutations: {
    setJobs (state, jobs) {
      state.jobs = jobs
    },
    setFavorites (state, favorites) {
      state.favorites = favorites
    },
    favorite (state, job) {
      state.favorites.push(job)
      persist.favorites()
    },
    unfavorite (state, job) {
      // 
    }
  },
  actions: {
    fetchFavorites ({ commit }) {
      let favorites = appSettings.getString('favorites', '')
      if (favorites) {
        commit('setFavorites', JSON.parse(favorites))
      }
    },
    fetchJobs ({ commit, state }) {
      // find local jobs first
      let localJobs = appSettings.getString('jobsJSON', '')

      if (localJobs) {
        commit('setJobs', JSON.parse(localJobs))
      }
        
      // fetch latest jobs
      axios.get(state.jobsDataURL)
        .then(({ data }) => {
          // persist jobs to local for pwa
          appSettings.setString('jobsJSON', JSON.stringify(data.jobs))
          commit('setJobs', data.jobs)
        })
    }
  }
})

const persist = {
  favorites () {
    appSettings.setString('favorites', JSON.stringify(store.state.favorites))
  }
}

Vue.prototype.$store = store

export default store
