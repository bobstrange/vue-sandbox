import axios from 'axios'
import { User } from '@/models/User'

export class UserAPI {
  fetchUser(id: number) {
    return axios.get<User>(`https://jsonplaceholder.typicode.com/users/${id}`)
  }
  fetchUsers() {
    return axios.get<User[]>('https://jsonplaceholder.typicode.com/users')
  }
}
