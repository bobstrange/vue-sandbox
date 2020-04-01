import axios from 'axios'
import { User } from '@/models/User'

export class UserAPI {
  async fetchUser(id: number): Promise<User> {
    return (await axios.get<User>(`https://jsonplaceholder.typicode.com/users/${id}`)).data
  }
  async fetchUsers(): Promise<User[]> {
    return (await axios.get<User[]>('https://jsonplaceholder.typicode.com/users')).data
  }
}
