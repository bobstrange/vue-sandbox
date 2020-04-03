import Vue from "vue"
import Vuex from "vuex"
import { createStore, Module } from "vuex-smart-module"
import { user } from "@/store/user.store"

Vue.use(Vuex)

const root = new Module({
  modules: {
    user
  }
})
export default createStore(root)
