import axios from 'axios'

const client = axios.create({
  baseURL: 'http://localhost:3000',
  withCredentials: false,
  headers: { Accept: 'application/json', 'Content-Type': 'application/json' }
})

export const EventService = {
  getEvents() {
    return client.get('/events')
  },
  getEvent(id: string) {
    return client.get(`/events/${id}`)
  }
}
