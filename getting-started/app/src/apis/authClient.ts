import { getRequestErrors, httpClient, RequestErrors } from "./httpClient"
import { CurrentUser } from "@/models/user"

type SignupAttrs = Pick<CurrentUser, "email"> & { password: string }
type LoginAttrs = SignupAttrs

export const signup = async ({ email, password }: SignupAttrs): Promise<CurrentUser> => {
  const response = await httpClient.post<CurrentUser>("/login", { email, password })
  return response.data
}

type Result<T> = {
  data?: T,
  requestErrors?: RequestErrors
}

export const login = async ({ email, password }: LoginAttrs): Promise<Result<CurrentUser>> => {
  try {
    const response = await httpClient.post<CurrentUser>("/login", { email, password })
    return { data: response.data }
  } catch (e: unknown) {
    const requestErrors = getRequestErrors(e)
    if (requestErrors) {
      return { requestErrors }
    }
    throw e
  }
}
