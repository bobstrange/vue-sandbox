<template>
  <div class="text-lg pt-16">
    <h1 class="text-2xl font-extrabold text-gray-800">Create an event</h1>
    <form>
      <label for="category" class="category-label">Select a category</label>
      <select name="category" v-model="event.category" class="mt-0.5 w-1/2">
        <option
          v-for="option in categories"
          :value="option"
          :key="option"
          :selected="option === event.category"
        >
          {{ option }}
        </option>
      </select>

      <h3 class="category-heading mb-2">Name & describe your event</h3>
      <BaseInput v-model="event.title" label="title" type="text" />
      <BaseInput v-model="event.description" label="description" type="text" />

      <h3 class="category-heading">Where is your event ?</h3>
      <BaseInput v-model="event.location" label="location" type="text" />

      <h3 class="category-heading">Are pets allowed ?</h3>
      <div class="mt-2">
        <input
          type="radio"
          v-model="event.pets"
          :value="1"
          name="pets"
          class="mr-1"
        />
        <label class="text-gray-600 text-base">Yes</label>
      </div>
      <div>
        <input
          type="radio"
          v-model="event.pets"
          :value="0"
          name="pets"
          class="mr-1"
        />
        <label class="text-gray-600 text-base">No</label>
      </div>

      <h3 class="category-heading">Extras</h3>
      <div class="mt-2">
        <div>
          <input type="checkbox" v-model="event.extras.catering" class="mr-1" />
          <label class="text-gray-600 text-base">Catering</label>
        </div>
        <div>
          <input type="checkbox" v-model="event.extras.music" class="mr-1" />
          <label class="text-gray-600 text-base">Live music</label>
        </div>
      </div>

      <button
        type="submit"
        class="mt-4 transition duration-200 transform py-1 px-4 text-lg text-gray-700 bg-blue-300 rounded shadow hover:scale-105 hover:shadow-lg focus:outline-none"
        @click.prevent="onSubmit"
      >
        Submit
      </button>
    </form>
  </div>
</template>

<script setup>
import { defineProps, reactive } from 'vue'
import BaseInput from '../components/BaseInput.vue'

defineProps({
  msg: String,
})

const categories = reactive([
  'sustainability',
  'nature',
  'animal welfare',
  'housing',
  'education',
  'food',
  'community',
])

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

const onSubmit = (e) => {
  console.log('onSubmit')
  console.log(e)
  console.log(event)
}
</script>

<style scoped>
.category-heading {
  @apply mt-4 font-semibold;
}

.category-label {
  @apply mt-2 block text-sm text-gray-500;
}

.category-text-input {
  @apply mt-1 px-2 pt-0.5 text-base;
}

.submit-button {
}
</style>
