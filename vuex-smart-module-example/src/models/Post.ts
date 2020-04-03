import { User } from "@/models/User"

export type Post = {
  userId: User["id"]
  id: number
  title: string
  body: string
}
