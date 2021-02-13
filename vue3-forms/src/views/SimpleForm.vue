<template>
  <div class="text-lg pt-16">
    <h1 class="text-2xl font-extrabold text-gray-800">Create an event</h1>
    <form>
      <BaseSelect
        v-model="event.category"
        :options="categories"
        label="Select a category"
      />
      <h3 class="category-heading">Name & describe your event</h3>
      <BaseInput v-model="event.title" label="title" type="text" class="my-2" />
      <BaseInput
        v-model="event.description"
        label="description"
        type="text"
        class="my-2"
      />

      <h3 class="category-heading">Where is your event ?</h3>
      <BaseInput
        v-model="event.location"
        label="location"
        type="text"
        class="my-2"
      />

      <h3 class="category-heading">Are pets allowed ?</h3>
      <div class="mt-2">
        <BaseRadioGroup
          v-model="event.pets"
          name="pets"
          :options="petOptions"
        />
      </div>

      <h3 class="category-heading">Extras</h3>
      <div class="mt-2">
        <div>
          <BaseCheckbox v-model="event.extras.catering" label="Catering" />
        </div>
        <div>
          <BaseCheckbox v-model="event.extras.music" label="Live Music" />
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
import BaseSelect from '../components/BaseSelect.vue'
import BaseCheckbox from '../components/BaseCheckbox.vue'
import BaseRadio from '../components/BaseRadio.vue'
import BaseRadioGroup from '../components/BaseRadioGroup.vue'

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

const petOptions = reactive([
  { label: 'Yes', value: 1 },
  { label: 'No', value: 0 },
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

.category-text-input {
  @apply mt-1 px-2 pt-0.5 text-base;
}

.submit-button {
}
</style>
