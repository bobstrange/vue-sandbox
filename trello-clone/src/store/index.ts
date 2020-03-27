import Vue from 'vue'
import Vuex from 'vuex'
import defaultBoardPage from '@/default-board'
import { saveStatePlugin } from '@/utils'

import { Board } from '@/models/Board'
import { Task } from '@/models/Task'

Vue.use(Vuex)

const board: Board = JSON.parse(localStorage.getItem('board') as string) as Board || defaultBoardPage

type State = {
  board: Board
}

type GetterInterface = {
  getTask: (id: string) => Task | undefined
}

type Getters<S, G> = {
  [K in keyof G]: (state: S, getters: G) => G[K]
}

const state: State = {
  board
}

const getters: Getters<State, GetterInterface> = {
  getTask(state) {
    return (id: string) => {
      for (const column of state.board.columns) {
        for (const task of column.tasks) {
          if (task.id === id) {
            return task
          }
        }
      }
    }
  }
}


export default new Vuex.Store({
  state,
  getters,
  mutations: {},
  actions: {},
  modules: {},
  plugins: [saveStatePlugin]
})
