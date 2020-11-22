import { NextFunction, Request, Response } from 'express'
import jwt from 'jsonwebtoken'
import { JWT_KEY } from '../config'

interface UserPayload {
  firstName: string
  lastName: string
  screenName: string
  id: string
  email: string
}

declare global {
  namespace Express {
    interface Request {
      currentUser?: UserPayload
    }
  }
}

export const currentUserMiddleware = (
  req: Request,
  _: Response,
  next: NextFunction
): void => {
  if (!req.session?.jwt) {
    return next()
  }

  try {
    const payload = jwt.verify(req.session.jwt, JWT_KEY) as UserPayload
    req.currentUser = payload
    // eslint-disable-next-line no-empty
  } catch {}

  next()
}
