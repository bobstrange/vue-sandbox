import axios from 'axios'
import { Email } from '../types/Email'

const client = axios.create({ baseURL: 'http://localhost:3001' })

export function fetchEmails() {
  return client.get<Email[]>('/emails')
}

export function updateEmail(email: Email) {
  return client.put(`/emails/${email.id}`, email)
}
