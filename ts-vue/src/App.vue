<script setup lang="ts">
import { onMounted, reactive, ref } from 'vue'
import fetchCount from './services/fetch-count'
const count = ref(0)
const step = ref(1)

const appInfo = reactive({
  name: 'Counter',
  slogan: 'an app you can count on',
})

const addCount = (num = 1) => {
  if (count.value !== null) {
    count.value += num
  }
}

onMounted(() => {
  fetchCount((initialCount) => {
    count.value = initialCount
  })
})
</script>

<template>
  <div>
    <h1>{{ appInfo.name }}</h1>
    <h2>{{ appInfo.slogan }}</h2>
  </div>
  <p>{{ count }}</p>
  <button @click="addCount()">Add 1</button>
  <button @click="addCount(step)">Add {{ step }}</button>
  <div class="">
    <label>Step: </label><input type="number" min="0" v-model="step" />
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
