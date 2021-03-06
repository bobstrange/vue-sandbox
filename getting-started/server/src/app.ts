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
import { PostDeleteRouter } from './routes/post/delete'
import { UserIndexRouter } from './routes/users'
import { LogoutRouter } from './routes/auth/logout'

export const app = Express()
app.use(
  cors({
    origin: true,
    credentials: true
  })
)
app.set('trust proxy', true)
app.use(Express.json())
app.use(
  cookieSession({
    name: 'session',
    signed: false
  })
)
app.use(currentUserMiddleware)

app.use(SignupRouter)
app.use(LoginRouter)
app.use(LogoutRouter)
app.use(currentUserRouter)
app.use(UserIndexRouter)

app.use(PostIndexRouter)
app.use(PostCreateRouter)
app.use(PostShowRouter)
app.use(PostUpdateRouter)
app.use(PostDeleteRouter)

app.all('*', async () => {
  throw new NotFoundError()
})
app.use(errorHandler)
