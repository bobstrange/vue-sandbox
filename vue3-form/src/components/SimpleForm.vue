<template>
  <div>
    <h1>Create an event</h1>
    <form @submit.prevent="sendForm">
      <BaseSelect
        :options="categories"
        v-model="event.category"
        label="Select a category"
      />
      <h3>Name & describe your event</h3>

      <BaseInput v-model="event.title" label="Title" type="text" />
      <BaseInput v-model="event.description" label="Description" type="text" />

      <h3>Where is your event?</h3>

      <BaseInput v-model="event.location" label="Location" type="text" />

      <h3>Are pets allowed?</h3>
      <BaseRadioGroup v-model="event.pets" name="pets" :options="petOptions" />

      <h3>Extras</h3>
      <BaseCheckbox v-model="event.extras.catering" label="Catering" />
      <BaseCheckbox v-model="event.extras.music" label="Live music" />

      <pre>{{ JSON.stringify(event, null, 2) }}</pre>
      <button type="submit">Submit</button>
    </form>
  </div>
</template>

<script setup lang="ts">
import axios from 'axios'
import { reactive } from '@vue/reactivity'
import BaseInput from './BaseInput.vue'
import BaseSelect from './BaseSelect.vue'
import BaseCheckbox from './BaseCheckbox.vue'
import BaseRadioGroup from './BaseRadioGroup.vue'

const categories = [
  'sustainability',
  'nature',
  'animal welfare',
  'housing',
  'education',
  'food',
  'community',
]
const event = reactive({
  category: '',
  title: '',
  description: '',
  location: '',
  pets: 1,
  extras: {
    catering: false,
    music: false,
  },
})

const petOptions = [
  { label: 'Yes', value: 1 },
  { label: 'No', value: 0 },
]

const sendForm = async () => {
  try {
    const res = await axios.post(
      'https://my-json-server.typicode.com/bobstrange/vue-sandbox/events',
      event
    )
    console.log('Response', res)
  } catch (e) {
    console.error('Error', e)
  }
}
</script>
