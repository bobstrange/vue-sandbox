<template>
  <PostList />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import PostList from './views/PostList.vue'

export default defineComponent({
  name: 'App',
  components: {
    PostList,
  },
})
</script>

<style>
body {
  font-size: 16px;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
