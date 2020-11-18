import { httpClient } from "./httpClient"
import { Post } from "@/models/post"

export const fetchPosts = async (): Promise<Post[]> => {
  const result = await httpClient.get<Post[]>("/posts")
  return result.data
}
