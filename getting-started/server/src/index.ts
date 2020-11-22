import { app } from './app'
import { PORT } from './config'

const start = () => {
  app.listen(PORT, () => {
    console.log(`Listening on localhost:${PORT}`)
  })
}

start()
