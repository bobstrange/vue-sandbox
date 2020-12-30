import { client } from './client'

export async function fetchEvents() {
  try {
    return (await client.get('/events')).data
  } catch (e) {
    console.error(e)
  }
}

export async function fetchEvent(id) {
  try {
    return (await client.get(`/events/${id}`)).data
  } catch (e) {
    console.error(e)
  }
}
