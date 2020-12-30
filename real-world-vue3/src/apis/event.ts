import { client } from './client'

interface Event {
  id: number
  category: string
  title: string
  description: string
  location: string
  date: string
  time: string
  organizer: string
}
export async function fetchEvents(): Promise<Event[]> {
  return (await client.get('/events')).data
}

export async function fetchEvent(id: string): Promise<Event> {
  return (await client.get(`/events/${id}`)).data
}
