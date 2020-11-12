import { httpClient } from "./httpClient"

type User = {
  id: number
  firstName: string
  lastName: string
  screenName: string
}

export const fetchUsers = async (): Promise<User[]> => {
  const response = await httpClient.get<User[]>("/users")
  return response.data
}
