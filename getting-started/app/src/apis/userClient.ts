import { httpClient } from './httpClient'
import { User } from '@/models/user'

export const fetchUsers = async (): Promise<User[]> => {
  const response = await httpClient.get<User[]>('/users')
  return response.data
}
