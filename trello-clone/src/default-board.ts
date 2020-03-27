import { uuid } from './utils'
import { Board } from '@/models/Board'

const board: Board =  {
  name: 'workshop',
  columns: [
    {
      name: 'todo',
      tasks: [
        {
          description: '',
          name: 'first task',
          id: '1-1',
          userAssigned: false
        },
        {
          description: '',
          name: 'second task',
          id: '1-2',
          userAssigned: false
        },
        {
          description: '',
          name: 'and third',
          id: '1-3',
          userAssigned: false
        }
      ]
    },
    {
      name: 'in-progress',
      tasks: [
        {
          description: '',
          name: 'first task',
          id: '2-1',
          userAssigned: false
        }
      ]
    },
    {
      name: 'done',
      tasks: [
        {
          description: '',
          name: 'first task',
          id: '3-1',
          userAssigned: false
        }
      ]
    }
  ]
}

export default board
