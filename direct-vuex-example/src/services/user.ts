import axios from 'axios'
import { User } from '@/models/User'

export const fetchUsers = async (): Promise<User[]> => {
  const response = await axios.get<User[]>('http://localhost:3000/users')
  return response.data
}

export const fetchUser = async (id: number): Promise<User> => {
  const response = await axios.get<User>(`http://localhost:3000/users/${id}`)
  return response.data
}
