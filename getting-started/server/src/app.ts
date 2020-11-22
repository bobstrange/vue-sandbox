import Express from 'express'
import 'express-async-errors'
import cors from 'cors'
import cookieSession from 'cookie-session'
import { SignupRouter } from './routes/signup'
import { NotFoundError } from './errors/NotFoundError'
import { errorHandler } from './middlewares/errorHandler'

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
app.all('*', async () => {
  throw new NotFoundError()
})
app.use(errorHandler)
