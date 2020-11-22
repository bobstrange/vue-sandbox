import { Request, Response, Router } from 'express'
import { NotFoundError } from '../../errors/NotFoundError'
import { Post } from '../../models/Post'

const router = Router()
const postShowHandler = async (req: Request, res: Response) => {
  const post = await Post.fetchPostById(req.params.id)
  if (!post) {
    throw new NotFoundError()
  }
  res.status(200).send(post)
}

router.get('/posts/:id', postShowHandler)
export { router as PostShowRouter }
