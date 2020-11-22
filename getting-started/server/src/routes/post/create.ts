import { Request, Response, Router } from 'express'
import { body } from 'express-validator'
import { loginRequiredMiddleware } from '../../middlewares/loginRequiredMiddleware'
import { validateRequestMiddleware } from '../../middlewares/validateRequestMiddleware'
import { Post } from '../../models/Post'

const router = Router()

const postValidations = [
  body('title')
    .notEmpty()
    .isLength({ max: 50 })
    .withMessage('Title should be less than 50 characters'),
  body('text').notEmpty().withMessage('Text should not be empty'),
]

const postCreateHandler = async (req: Request, res: Response) => {
  const { title, text }: { title: string; text: string } = req.body
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const userId = req.currentUser!.id
  const post = Post.build({ title, text, userId })
  await post.save()
  res.status(201).send(post)
}

router.post(
  '/posts',
  loginRequiredMiddleware,
  postValidations,
  validateRequestMiddleware,
  postCreateHandler
)
export { router as PostCreateRouter }
