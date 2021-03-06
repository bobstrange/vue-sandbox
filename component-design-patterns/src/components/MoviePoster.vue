<template>
  <div>
    <img alt="Vue logo" src="../assets/logo.png" />
    <h1>{{ title }}</h1>
    <p>{{ length }} <span v-if="watched">✅</span></p>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'
const props = defineProps({
  image: {
    type: String,
    default: '../assets/logo.png'
  },
  title: {
    type: String,
    required: true
  },
  length: {
    type: [Number, String],
    default: 90
  },
  watched: {
    type: Boolean,
    required: true
  }
})
</script>

<style scoped></style>
