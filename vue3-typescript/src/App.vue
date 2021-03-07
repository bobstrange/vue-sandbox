<template>
  <div :class="$style.app">
    <DynamicHeading :level="'2'" />
    <HelloWorld />
  </div>
</template>

<script lang="ts">
import DynamicHeading from '@/components/DynamicHeading.vue'
import HelloWorld from '@/components/HelloWorld.vue'
export default {
  name: 'App',
  components: {
    DynamicHeading,
    HelloWorld
  }
}
</script>

<style module>
.app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
