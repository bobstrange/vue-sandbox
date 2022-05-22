import { defineStore } from "pinia"
import EventService from "../services/EventService"

export type Event = {
  id: string
  category: EventCategory
  title: string
  description: string
  location: string
  date: string
  time: string
  organizer: string
}

type EventCategories = [
  "sustainability",
  "nature",
  "animal welfare",
  "housing",
  "education",
  "food",
  "community",
  ""
]
type EventCategory = EventCategories[number]

export const eventCategories: EventCategories = [
  "sustainability",
  "nature",
  "animal welfare",
  "housing",
  "education",
  "food",
  "community",
  "",
]

export const useEventStore = defineStore("EventStore", {
  state: () => ({
    events: [] as Event[],
    event: {} as Event,
  }),
  getters: {
    numberOfEvents: (state) => state.events.length,
  },
  actions: {
    createEvent(event: Event) {
      return EventService.postEvent(event)
        .then(() => {
          this.events.push(event)
        })
        .catch((error) => {
          throw error
        })
    },
    fetchEvents() {
      return EventService.getEvents()
        .then((response) => {
          this.events = response.data
        })
        .catch((error) => {
          throw error
        })
    },
    fetchEvent(id: string) {
      const existingEvent = this.events.find((event) => event.id === id)

      if (existingEvent) {
        this.event = existingEvent
      } else {
        return EventService.getEvent(id)
          .then((response) => {
            this.event = response.data
          })
          .catch((error) => {
            throw error
          })
      }
    },
  },
})
