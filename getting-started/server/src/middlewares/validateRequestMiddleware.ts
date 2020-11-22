import { NextFunction, Request, Response } from 'express'
import { validationResult } from 'express-validator'
import { RequestValidationError } from '../errors/RequestValidationError'

export const validateRequestMiddleware = (
  req: Request,
  _: Response,
  next: NextFunction
): void => {
  const errors = validationResult(req)

  if (!errors.isEmpty()) {
    throw new RequestValidationError(errors.array())
  }

  next()
}
