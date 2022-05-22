import { defineStore } from "pinia"
import EventService from "../services/EventService"

type Event = {
  id: string
  category: string
  title: string
  description: string
  location: string
  date: string
  organizer: string
}

export const useEventStore = defineStore("EventStore", {
  state: () => ({
    events: [] as Event[],
    event: {} as Event,
  }),
  getters: {
    numberOfEvents: (state) => state.events.length,
  },
  actions: {
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
