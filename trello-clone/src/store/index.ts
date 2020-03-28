import Vue from 'vue'
import Vuex from 'vuex'
import defaultBoardPage from '@/default-board'
import { saveStatePlugin, uuid } from '@/utils'

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

type MutationInterface = {
  CREATE_TASK: {
    tasks: Task[],
    name: Task['name'],
  }
}

type Mutations<S, M> = {
  [K in keyof M]: (state: S, payload: M[K]) => void
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

const mutations: Mutations<State, MutationInterface> = {
  CREATE_TASK(state, { tasks, name }) {
    tasks.push({
      name,
      id: uuid(),
      description: '',
      userAssigned: true
    })
  }
}

const actions = {

}

export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions: {},
  modules: {},
  plugins: [saveStatePlugin]
})
