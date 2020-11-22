import { Request, Response, Router } from 'express'
import { User } from '../../models/User'

const router = Router()
const userIndexHandler = async (_: Request, res: Response) => {
  const users = await User.fetchAllWithoutEmail()
  res.send(users)
}

router.get('/users', userIndexHandler)

export { router as UserIndexRouter }
