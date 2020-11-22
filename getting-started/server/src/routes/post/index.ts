import { Request, Response, Router } from 'express'
import { loginRequiredMiddleware } from '../../middlewares/loginRequiredMiddleware'
import { Post } from '../../models/Post'

const router = Router()

const postIndexHandler = async (_: Request, res: Response) => {
  const posts = await Post.fetchPosts()
  res.status(200).send(posts)
}

router.get('/posts', loginRequiredMiddleware, postIndexHandler)
export { router as PostIndexRouter }
