<script setup lang="ts">
import { v4 as uuidv4 } from "uuid"
import { useRouter } from "vue-router"
import { Event, eventCategories as categories, useEventStore } from "../stores/EventStore"
import { useUserStore } from "../stores/UserStore"

const event: Event = {
  id: "",
  category: "",
  title: "",
  description: "",
  location: "",
  date: "",
  time: "",
  organizer: "",
}
const eventStore = useEventStore()
const userStore = useUserStore()
const router = useRouter()

const onSubmit = async () => {
  const submittingEvent = {
    ...event,
    id: uuidv4(),
    organizer: userStore.user,
  }

  try {
    await eventStore.createEvent(submittingEvent)
    router.push({
      name: "EventDetails",
      params: { id: submittingEvent.id },
    })
  } catch (error) {
    if (error instanceof Error) {
      router.push({
        name: "ErrorDisplay",
        params: { error: error.message },
      })
    }
  }
}
</script>

<template>
  <h1>Create an event</h1>

  <div class="form-container">
    <form @submit.prevent="onSubmit">
      <label>Select a category: </label>
      <select v-model="event.category">
        <option
          v-for="option in categories"
          :key="option"
          :value="option"
          :selected="option === event.category"
        >
          {{ option }}
        </option>
      </select>

      <h3>Name & describe your event</h3>

      <label>Title</label>
      <input v-model="event.title" type="text" placeholder="Title" />

      <label>Description</label>
      <input v-model="event.description" type="text" placeholder="Description" />

      <h3>Where is your event?</h3>

      <label>Location</label>
      <input v-model="event.location" type="text" placeholder="Location" />

      <h3>When is your event?</h3>
      <label>Date</label>
      <input v-model="event.date" type="text" placeholder="Date" />

      <label>Time</label>
      <input v-model="event.time" type="text" placeholder="Time" />

      <button type="submit">Submit</button>
    </form>
  </div>
</template>
