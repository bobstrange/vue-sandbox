<script setup lang="ts">
import { ref, onMounted } from 'vue'
import fetchCount from '../services/fetch-count'

const count = ref<number | null>(null)
const step = ref(1)

onMounted(() => {
  fetchCount((initialCount) => {
    count.value = initialCount
  })
})

const addCount = (num = 1) => {
  if (count.value !== null) {
    count.value += num
  }
}
</script>

<template>
  <div>
    <p>{{ count }}</p>
    <button @click="addCount()">Add 1</button>
    <button @click="addCount(step)">Add {{ step }}</button>
    <div class="">
      <label>Step: </label><input type="number" min="0" v-model="step" />
    </div>
  </div>
</template>
