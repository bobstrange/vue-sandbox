<template>
  <nav>
    <ul>
      <li><router-link to="/">Home</router-link></li>
      <li><router-link to="/login">Login</router-link></li>
    </ul>
    <button v-show="showLoggedIn" @click="logoutHandler()">Logout</button>
  </nav>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'

export default defineComponent({
  setup(props) {
    const showLoggedIn = computed(() => props.loggedIn)
    return { showLoggedIn, logoutHandler: props.logout }
  },
  props: {
    loggedIn: {
      type: Boolean,
      require: true,
    },
    logout: {
      type: Function,
      require: true,
    },
  },
})
</script>

<style scoped>
nav {
  padding: 10px;
  background-color: #42b983;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}

ul {
  list-style: none;
  display: flex;
  flex-direction: row;
}

li a {
  margin-right: 10px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #222;
}

button {
  height: 30px;
  padding: 5px;
  border-radius: 5px;
  border-style: none;
  background-color: white;
  font-size: 16px;
  font-weight: bold;
  margin-right: 20px;
}
</style>
