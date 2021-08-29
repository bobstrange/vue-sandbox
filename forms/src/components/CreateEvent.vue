<template>
  <div class="create-event">
    <h1>Create a Event</h1>
    <form>
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
      <div>
        <input type="radio" v-model="event.pets" :value="1" name="pets" />
        <label>Yes</label>
      </div>

      <div>
        <input type="radio" v-model="event.pets" :value="0" name="pets" />
        <label>No</label>
      </div>

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
import BaseInput from './BaseInput.vue'
import BaseSelect from './BaseSelect.vue'
import BaseCheckbox from './BaseCheckbox.vue'

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

    return {
      categories,
      event,
    }
  },
  components: {
    BaseInput,
    BaseSelect,
    BaseCheckbox,
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
