import Express from 'express'
import 'express-async-errors'
import cors from 'cors'
import cookieSession from 'cookie-session'
import { NotFoundError } from './errors/NotFoundError'
import { errorHandler } from './middlewares/errorHandler'

import { SignupRouter } from './routes/signup'
import { LoginRouter } from './routes/login'
import { currentUserRouter } from './routes/currentUser'

export const app = Express()
app.set('trust proxy', true)
app.use(Express.json())
app.use(
  cookieSession({
    name: 'session',
    signed: false
  })
)
app.use(cors())

app.use(SignupRouter)
app.use(LoginRouter)
app.use(currentUserRouter)

app.all('*', async () => {
  throw new NotFoundError()
})
app.use(errorHandler)
