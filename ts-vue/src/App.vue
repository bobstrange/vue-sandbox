<script setup lang="ts">
import Counter from './components/Counter.vue'
</script>

<template>
  <div>
    <Counter
      :alert-message-on-limit="'please do not count up any more'"
      :limit="10"
    />
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
