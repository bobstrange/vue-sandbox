import { Request, Response, Router } from 'express'
import { body } from 'express-validator'
import { NotFoundError } from '../../errors/NotFoundError'
import { UnAuthorizedError } from '../../errors/UnauthorizedError'
import { loginRequiredMiddleware } from '../../middlewares/loginRequiredMiddleware'
import { validateRequestMiddleware } from '../../middlewares/validateRequestMiddleware'
import { Post } from '../../models/Post'

const router = Router()

const postValidations = [
  body('title')
    .optional()
    .notEmpty()
    .isLength({ max: 50 })
    .withMessage('Title should be less than 50 characters'),
  body('text').optional().notEmpty().withMessage('Text should not be empty'),
]

const postUpdateHandler = async (req: Request, res: Response) => {
  const post = await Post.fetchPostById(req.params.id)
  if (!post) {
    throw new NotFoundError()
  }

  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  if (post.userId !== req.currentUser!.id) {
    throw new UnAuthorizedError()
  }

  const { title, text }: { title?: string; text?: string } = req.body
  if (title) {
    post.title = title
  }
  if (text) {
    post.text = text
  }
  await post.save()
  res.send(post)
}

router.put(
  '/posts/:id',
  loginRequiredMiddleware,
  postValidations,
  validateRequestMiddleware,
  postUpdateHandler
)

export { router as PostUpdateRouter }
