import { client } from './client'

export async function fetchEvents() {
  try {
    return (await client.get('/events')).data
  } catch (e) {
    console.error(e)
  }
}
