<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <!-- <UserList :users="users" /> -->
    <CompositionUserList :users="users" @deleteUser="userDeleteClicked"/>
  </div>
</template>

<script lang="ts">
import { fakeUsers } from './util/fake_users.js'
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
  },
  methods: {
    userDeleteClicked(id: number) {
      console.log('userDeleteClicked: ', id)
      this.users = this.users.filter(user => {
        return id !== user.id
      })
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
