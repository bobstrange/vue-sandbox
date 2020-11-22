import { Request, Response, NextFunction } from 'express'
import { UnAuthorizedError } from '../errors/UnauthorizedError'

export const loginRequiredMiddleware = (
  req: Request,
  _: Response,
  next: NextFunction
): void => {
  if (!req.currentUser) {
    throw new UnAuthorizedError()
  }

  next()
}
