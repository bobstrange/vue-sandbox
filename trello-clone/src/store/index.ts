import Vue from 'vue'
import Vuex, { Mutation } from 'vuex'
import defaultBoardPage from '@/default-board'
import { saveStatePlugin, uuid } from '@/utils'

import { Board } from '@/models/Board'
import { Task } from '@/models/Task'

Vue.use(Vuex)

let board: Board
try {
  console.log('JSON', localStorage.getItem('board'))
  board = JSON.parse(localStorage.getItem('board') as string) as Board || defaultBoardPage
} catch (error) {
  board = defaultBoardPage
}

type State = {
  board: Board
}

type GetterInterface = {
  getTask: (id: string) => Task | undefined
}

type Getters<S, G> = {
  [K in keyof G]: (state: S, getters: G) => G[K]
}

type CreateTaskPayload = {
  tasks: Task[]
  name: Task['name']
}
type UpdateTaskPayload = {
  task: Task,
  key: keyof Pick<Task, 'description' | 'name'>
  value: Task[keyof Pick<Task, 'description' | 'name'>]
}

type MutationInterface = {
  CREATE_TASK: CreateTaskPayload,
  UPDATE_TASK: UpdateTaskPayload
}

type Mutations<S, M> = {
  [K in keyof M]: (state: S, payload: M[K]) => void
}

type ActionInterface = {
  createTask: CreateTaskPayload,
  updateTask: UpdateTaskPayload
}

type Commit<M> = <T extends keyof M>(type: T, payload?: M[T]) => void

type Dispatch<A> = <T extends keyof A>(type: T, payload?: A[T]) => Promise<any>

type Context<S, A, G, M, RS, RG> = {
  commit: Commit<M>,
  dispatch: Dispatch<A>,
  state: S,
  getters: G,
  rootState: RS,
  rootGetters: RG
}

type Actions<S, A, G = {}, M = {}, RS = {}, RG = {}> = {
  [K in keyof A]: (
    ctx: Context<S, A, G, M, RS, RG>,
    payload: A[K]
  ) => any
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
  },
  UPDATE_TASK(state, { task, key, value }) {
    task[key] = value
  }
}

const actions: Actions<
  State,
  ActionInterface,
  GetterInterface,
  MutationInterface
> = {
  createTask(ctx, payload) {
    ctx.commit('CREATE_TASK', payload)
  },
  updateTask(ctx, payload) {
    ctx.commit('UPDATE_TASK', payload)
  }
}

export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions,
  modules: {},
  plugins: [saveStatePlugin]
})
