<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <!-- <UserList :users="users" /> -->
    <CompositionUserList :users="users" />
  </div>
</template>

<script>
import { fakeUsers } from './util/fake_users'
// import UserList from './components/UserList.vue'
import CompositionUserList from './components/CompositionUserList.vue'

export default {
  name: 'App',
  components: {
    // UserList,
    CompositionUserList
  },
  data() {
    return {
      users: fakeUsers
    }
  }
}
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
