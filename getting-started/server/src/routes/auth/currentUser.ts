import { Request, Response, Router } from 'express'

const router = Router()

const currentUserHandler = (req: Request, res: Response) => {
  res.send({ currentUser: req.currentUser || null })
}

router.get('/currentuser', currentUserHandler)
export { router as currentUserRouter }
