import Express, { Request, Response, Router } from 'express'
import { body } from 'express-validator'
import { scrypt } from 'crypto'
import jwt from 'jsonwebtoken'
import { promisify } from 'util'

import { BadRequestError } from '../../errors/BadRequestError'
import { validateRequestMiddleware } from '../../middlewares/validateRequestMiddleware'
import { User } from '../../models/User'
import { JWT_KEY } from '../../config'

const router = Router()

const validations = [
  body('email').isEmail().withMessage('Email must be valid'),
  body('password').trim().notEmpty().withMessage('Password must be specified'),
]

const loginHandler = async (req: Request, res: Response) => {
  const { email, password }: { email: string; password: string } = req.body
  const existingUser = await User.fetchByEmail(email)

  if (!existingUser) {
    throw new BadRequestError('Invalid credentials')
  }

  const [hashedPassword, salt] = existingUser.password.split('.')
  const buffer = (await promisify(scrypt)(password, salt, 64)) as Buffer

  if (buffer.toString('hex') !== hashedPassword) {
    throw new BadRequestError('Invalid credentials')
  }

  const userJwt = jwt.sign(
    {
      id: existingUser.id,
      firstName: existingUser.firstName,
      lastName: existingUser.lastName,
      screenName: existingUser.screenName,
      email: existingUser.email,
    },
    JWT_KEY
  )

  req.session = {
    jwt: userJwt,
  }
  res.status(200).send(existingUser)
}

router.post('/login', validations, validateRequestMiddleware, loginHandler)

export { router as LoginRouter }
