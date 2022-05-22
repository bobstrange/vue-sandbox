import { defineStore } from "pinia"

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
})
