import { NextFunction, Request, Response, Router } from 'express'
import { currentUserMiddleware } from '../middlewares/currentUserMiddleware'

const router = Router()

const currentUserHandler = (req: Request, res: Response) => {
  res.send({ currentUser: req.currentUser || null })
}

router.get('/currentuser', currentUserMiddleware, currentUserHandler)
export { router as currentUserRouter }
