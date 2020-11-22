import Express from 'express'
import 'express-async-errors'
import cors from 'cors'
import cookieSession from 'cookie-session'
import { NotFoundError } from './errors/NotFoundError'
import { errorHandler } from './middlewares/errorHandler'
import { currentUserMiddleware } from './middlewares/currentUserMiddleware'

import { SignupRouter } from './routes/auth/signup'
import { LoginRouter } from './routes/auth/login'
import { currentUserRouter } from './routes/auth/currentUser'
import { PostIndexRouter } from './routes/post'
import { PostCreateRouter } from './routes/post/create'
import { PostShowRouter } from './routes/post/show'
import { PostUpdateRouter } from './routes/post/update'

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
app.use(currentUserMiddleware)

app.use(SignupRouter)
app.use(LoginRouter)
app.use(currentUserRouter)

app.use(PostIndexRouter)
app.use(PostCreateRouter)
app.use(PostShowRouter)
app.use(PostUpdateRouter)

app.all('*', async () => {
  throw new NotFoundError()
})
app.use(errorHandler)
