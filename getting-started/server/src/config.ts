import 'dotenv/config'

if (!process.env.JWT_KEY) {
  throw new Error('Please define JWT_KEY')
}

if (!process.env.DB_HOST) {
  throw new Error('Please define DB_HOST')
}

if (!process.env.DB_PORT) {
  throw new Error('Please define DB_PORT')
}

if (!process.env.DB_USER) {
  throw new Error('Please define DB_USER')
}

if (!process.env.DB_PASSWORD) {
  throw new Error('Please define DB_PASSWORD')
}

if (!process.env.DB_NAME) {
  throw new Error('Please define DB_NAME')
}

export const PORT = Number(process.env.API_PORT || '8080')
export const JWT_KEY = process.env.JWT_KEY
export const DB_HOST = process.env.DB_HOST
export const DB_PORT = process.env.DB_PORT
export const DB_USER = process.env.DB_USER
export const DB_PASSWORD = process.env.DB_PASSWORD
export const DB_NAME = process.env.DB_NAME
