import Vue from 'vue'
import Vuex from 'vuex'
import defaultBoardPage from '@/default-board'

Vue.use(Vuex)

const board = JSON.parse(localStorage.getItem('board') as string) || defaultBoardPage

export default new Vuex.Store({
  state: {
    board
  },
  getters: {
    getTask(state) {
      return (id: string) => {
        const task = state.board.columns.find((column) => {
          column.tasks.find((task) => {
            return task.id === id
          })
        })
        return task
      }
    }
  },
  mutations: {},
  actions: {},
  modules: {}
})
