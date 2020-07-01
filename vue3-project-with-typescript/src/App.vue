<template>
  <div id="app">
    <h1>Hello Vue3</h1>
  </div>
</template>

<script lang="ts">
import Vue, { defineComponent } from "vue";
export default defineComponent({
  name: "App",
  components: {},
});
</script>

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
