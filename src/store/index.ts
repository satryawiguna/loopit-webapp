import Vue from 'vue'
import Vuex, {Commit} from 'vuex'
import axios from 'axios'
import { User } from '@/model/user'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: new User()
  },
  mutations: {
    ['SET_USER'] (state, user) {
      state.user = user
    }
  },
  actions: {
    setUser({commit}, user) {
      return commit('SET_USER', user)
    },
  },
  modules: {
  }
})
