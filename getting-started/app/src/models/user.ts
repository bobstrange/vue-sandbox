export interface CurrentUser {
  id: number
  firstName: string
  lastName: string
  screenName: string
  email: string
}

export type User = Omit<CurrentUser, "email">
