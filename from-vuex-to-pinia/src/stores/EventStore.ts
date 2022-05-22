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
  },
})
