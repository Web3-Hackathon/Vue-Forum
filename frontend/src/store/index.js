import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  session: {
    id: 1,
    username: 'hoe1921',
    avatar: 'https://64.media.tumblr.com/0f1d9be0930e0fd6e1421e0af63b4baa/4b38c49aa49bf456-a5/s1280x1920/54be3df4f578d67626ed9b3849f53d129667b940.jpg',
    key: 1
  }
}

const getters = {
  isLogged(state) {
    return state.session.key ? true : false
  },

  user(state) {
    return state.session || false;
  }
}

const mutations = {

}

const actions = {

}

export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions
})
