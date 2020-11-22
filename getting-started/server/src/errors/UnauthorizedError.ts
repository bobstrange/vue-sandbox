import { CustomError } from './CustomError'

export class UnAuthorizedError extends CustomError {
  statusCode = 401

  constructor() {
    super('Not authorized')

    Object.setPrototypeOf(this, UnAuthorizedError.prototype)
  }

  serializeErrors() {
    return [{ message: 'Not authorized' }]
  }
}
