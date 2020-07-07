import { Post } from '@/types/Post'

export interface S {
  posts: Post[]
}

export interface G {
  posts: Post[]
  postById: (id: number) => Post?
}

export interface RG {
  'posts/posts': G['posts']
  'posts/postById': G['postById']
}

export interface M {
  UPDATE_POSTS: void
}

export interface RM {
  'posts/UPDATE_POSTS': M['UPDATE_POSTS']
}

export interface A {
  UPDATE_POSTS: void
}

export interface RA {
  'posts/UPDATE_POSTS': A['UPDATE_POSTS']
}
