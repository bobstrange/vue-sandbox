<template>
  <div class="create-event">
    <h1>Create a Event</h1>
    <form @submit.prevent="sendForm">
      <BaseSelect
        label="Select a category"
        v-model="event.category"
        :options="categories"
      />

      <h3>Name & describe your event</h3>

      <BaseInput
        class="title"
        v-model="event.title"
        label="Title"
        type="text"
      />
      <BaseInput
        class="description"
        v-model="event.description"
        label="Description"
        type="text"
      />

      <h3>Where is your event?</h3>

      <BaseInput v-model="event.location" label="Location" type="text" />

      <h3>Are pets allowed?</h3>
      <BaseRadioGroup
        v-model="event.pets"
        name="pets"
        :options="petOptions"
        vertical
      />

      <h3>Extras</h3>
      <div>
        <BaseCheckbox v-model="event.extras.catering" label="Catering" />
      </div>

      <div>
        <BaseCheckbox v-model="event.extras.music" label="Live Music" />
      </div>

      <button type="submit">Submit</button>
    </form>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue'
import axios from 'axios'
import BaseInput from './BaseInput.vue'
import BaseSelect from './BaseSelect.vue'
import BaseCheckbox from './BaseCheckbox.vue'
import BaseRadioGroup from './BaseRadioGroup.vue'

export default defineComponent({
  setup() {
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
        const response = await axios.post('http://localhost:3001/events', event)
        console.log(response)
      } catch (error) {
        console.error(error)
      }
    }

    return {
      categories,
      event,
      petOptions,
      sendForm,
    }
  },
  components: {
    BaseInput,
    BaseSelect,
    BaseCheckbox,
    BaseRadioGroup,
  },
})
</script>

<style scoped>
.create-event {
  padding: 1rem;
}

.description {
  margin-top: 0.5rem;
}
</style>
