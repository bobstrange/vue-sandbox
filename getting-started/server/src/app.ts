import Express from 'express'
import cors from 'cors'
import { SignupRouter } from './auth/signup'

export const app = Express()
app.use(Express.json())
app.use(cors())
app.use(SignupRouter)
