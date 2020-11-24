import { Request, Response, Router } from 'express'

const router = Router()

const logoutHandler = (req: Request, res: Response) => {
  req.session = null
  res.send({})
}

router.post('/logout', logoutHandler)
export { router as LogoutRouter }
