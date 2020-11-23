import Axios from "axios"
import { API_URL, PORT } from "@/config/environments"

export const httpClient = Axios.create({
  baseURL: `${API_URL}:${PORT}`,
  withCredentials: true
})
