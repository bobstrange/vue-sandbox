<script setup lang="ts">
import { reactive, ref } from 'vue'
const count = ref(0)

const appInfo = reactive({
  name: 'Counter',
  slogan: 'an app you can count on',
})

const addCount = () => {
  if (count.value !== null) {
    count.value += 1
  }
}
</script>

<template>
  <div>
    <h1>{{ appInfo.name }}</h1>
    <h2>{{ appInfo.slogan }}</h2>
  </div>
  <p>{{ count }}</p>
  <button @click="addCount">Add</button>
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
