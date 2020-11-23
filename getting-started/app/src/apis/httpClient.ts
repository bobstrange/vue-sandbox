import Axios, { AxiosError } from "axios"
import { API_URL, PORT } from "@/config/environments"

export interface RequestError {
  message: string
  field?: string
}
export interface RequestErrors {
  errors: RequestError[]
}

type RequestErrorObject = AxiosError<RequestErrors>

export const httpClient = Axios.create({
  baseURL: `${API_URL}:${PORT}`,
  withCredentials: true
})

const isRequestErrorObject = (e: any): e is RequestErrorObject => {
  return typeof e === 'object' && e.isAxiosError !== undefined
}

export function getRequestErrors(e: any): RequestErrors | undefined {
  if (isRequestErrorObject(e) && e.response) {
    return e.response.data
  }
}
