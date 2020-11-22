import { BadRequestError } from '../../errors/BadRequestError'
import jwt from 'jsonwebtoken'
import Express, { Handler } from 'express'
import { body } from 'express-validator'
import { User } from '../../models/User'
import { JWT_KEY } from '../../config'
import { validateRequestMiddleware } from '../../middlewares/validateRequestMiddleware'

const router = Express.Router()

const validations = [
  body('firstName').notEmpty().withMessage('First Name must be provided'),
  body('lastName').notEmpty().withMessage('Last Name must be provided'),
  body('screenName').notEmpty().withMessage('Screen Name must be provided'),
  body('email').isEmail().withMessage('Email must be valid'),
  body('password')
    .trim()
    .isLength({ min: 4, max: 16 })
    .withMessage('Password must be between 4 and 16 characters'),
]

const signupHandler: Handler = async (req, res) => {
  const {
    firstName,
    lastName,
    screenName,
    email,
    password,
  }: {
    firstName: string
    lastName: string
    screenName: string
    email: string
    password: string
  } = req.body

  const existingUser = await User.fetchByEmail(email)

  if (existingUser) {
    throw new BadRequestError('Already use email')
  }

  const user = User.build({ firstName, lastName, screenName, email, password })
  await user.save()

  const userJwt = jwt.sign(
    {
      id: user.id,
      firstName: user.firstName,
      lastName: user.lastName,
      screenName: user.screenName,
      email: user.email,
    },
    JWT_KEY
  )

  req.session = {
    jwt: userJwt,
  }

  res.status(201).send(user)
}

router.post(
  '/signup',
  (req: Express.Request, _: Express.Response, next: Express.NextFunction) => {
    console.log('body is:', req.body)
    next()
  },
  validations,
  validateRequestMiddleware,
  signupHandler
)

export { router as SignupRouter }
