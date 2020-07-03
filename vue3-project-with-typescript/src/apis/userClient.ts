import { client } from './client'
import { User } from '../types/User'
import { AxiosResponse } from 'axios'

export const fetchUsers = async (): Promise<AxiosResponse<User>> => {
  return client.get('users')
}
