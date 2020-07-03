import { client } from './client'
import { Post } from '../types/Post'
import { AxiosResponse } from 'axios'

export const fetchPosts = (): Promise<AxiosResponse<Post[]>> => {
  return client.get('posts')
}

export const fetchPost = (postId: number): Promise<AxiosResponse<Post>> => {
  return client.get(`posts/${postId}`)
}
