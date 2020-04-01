import axios from 'axios'
import { Post } from '@/models/Post'

export class PostAPI {
  fetchPost(id: number) {
    return axios.get<Post>(`https://jsonplaceholder.typicode.com/posts/${id}`)
  }
  fetchPosts() {
    return axios.get<Post[]>('https://jsonplaceholder.typicode.com/posts')
  }
}
