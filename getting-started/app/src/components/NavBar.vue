<template>
  <div class="nav-bar">
    <router-link :to="{ name: 'Home' }">Home</router-link> |
    <router-link :to="{ name: 'Posts' }">Posts</router-link>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  setup () {

    return {}
  }
})
</script>

<style lang="scss" scoped>

.nav-bar {
  padding: 10px 30px;
  text-align: right;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

</style>
