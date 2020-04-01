<template>
  <div class="home">
    <h1>Home</h1>
    <ul>
      <li><router-link :to="{ name: 'Users' }">Users</router-link></li>
      <li><router-link :to="{ name: 'Posts' }">Posts</router-link></li>
    </ul>
  </div>
</template>

<script>
import { defineComponent } from '@vue/composition-api'
export default defineComponent({
  name: 'Home'
})
</script>

<style lang="scss" scoped>
ul {
  list-style: none;
  padding: 0;
}

li {
  font-size: 1.6rem;
  color: white;
  text-align: left;
  margin-left: 1rem;
  margin-top: 1rem;
}
</style>
