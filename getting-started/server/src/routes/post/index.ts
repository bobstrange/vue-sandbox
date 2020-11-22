import { Request, Response, Router } from 'express'
import { Post } from '../../models/Post'

const router = Router()

const postIndexHandler = async (_: Request, res: Response) => {
  const posts = await Post.fetchPosts()
  res.status(200).send(posts)
}

router.get('/posts', postIndexHandler)
export { router as PostIndexRouter }
