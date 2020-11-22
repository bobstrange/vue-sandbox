import Express from 'express'
import 'express-async-errors'
import cors from 'cors'
import cookieSession from 'cookie-session'
import { NotFoundError } from './errors/NotFoundError'
import { errorHandler } from './middlewares/errorHandler'

import { SignupRouter } from './routes/signup'
import { LoginRouter } from './routes/login'

export const app = Express()

app.use(Express.json())
app.use(
  cookieSession({
    signed: false,
    secure: process.env.NODE_ENV !== 'test'
  })
)
app.use(cors())

app.use(SignupRouter)
app.use(LoginRouter)

app.all('*', async () => {
  throw new NotFoundError()
})
app.use(errorHandler)
