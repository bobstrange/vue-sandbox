import { app } from './app'
import mongoose from 'mongoose'
import { PORT, DB_HOST, DB_PORT, DB_USER, DB_PASSWORD, DB_NAME } from './config'

const start = async () => {
  try {
    await mongoose.connect(`mongodb://${DB_HOST}:${DB_PORT}`, {
      db: DB_NAME,
      user: DB_USER,
      pass: DB_PASSWORD,
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true
    })
  } catch (error) {
    console.error(error)
  }

  app.listen(PORT, () => {
    console.log(`Listening on localhost:${PORT}`)
  })
}

start()
