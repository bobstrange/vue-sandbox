import Vue from 'vue'
import Vuex from 'vuex'
import user from '@/store/user.store'
import post from '@/store/post.store'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    user,
    post
  }
})
