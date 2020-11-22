import { Request, Response, Router } from 'express'
import { NotFoundError } from '../../errors/NotFoundError'
import { UnAuthorizedError } from '../../errors/UnauthorizedError'
import { loginRequiredMiddleware } from '../../middlewares/loginRequiredMiddleware'
import { Post } from '../../models/Post'

const router = Router()

const postDeleteHandler = async (req: Request, res: Response) => {
  const post = await Post.fetchPostById(req.params.id)
  if (!post) {
    throw new NotFoundError()
  }
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  if (post.userId !== req.currentUser!.id) {
    throw new UnAuthorizedError()
  }

  await Post.deletePostById(post.id)
  res.send({})
}

router.delete('/posts/:id', loginRequiredMiddleware, postDeleteHandler)
export { router as PostDeleteRouter }
