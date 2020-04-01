import axios from 'axios'
import { Post } from '@/models/Post'

export class PostAPI {
  async fetchPost(id: number): Promise<Post> {
    return (await axios.get<Post>(`https://jsonplaceholder.typicode.com/posts/${id}`)).data
  }
  async fetchPosts(): Promise<Post[]> {
    return (await axios.get<Post[]>('https://jsonplaceholder.typicode.com/posts')).data
  }
}
