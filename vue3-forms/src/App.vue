<template>
  <div>
    <SimpleForm />
  </div>
</template>

<script setup>
import SimpleForm from './views/SimpleForm.vue'
</script>

<style>
html {
  -webkit-text-size-adjust: 100%;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
body {
  margin: 0;
  font-family: 'Open Sans', sans-serif;
  font-size: 16px;
  line-height: 1.5;
}

#app {
  box-sizing: border-box;
  width: 500px;
  padding: 0 20px 20px;
  margin: 0 auto;
  background-color: #f2f2f2;
}
</style>
