if (!process.env.VUE_APP_API_URL) {
  throw new Error('Please configure VUE_APP_API_URL')
}

export const API_URL = process.env.VUE_APP_API_URL
export const PORT = parseInt(process.env.VUE_APP_API_PORT || '3000')
