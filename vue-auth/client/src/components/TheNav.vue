<template>
  <div class="nav">
    <router-link :to="{ name: 'home' }">Home</router-link>
    <router-link :to="{ name: 'dashboard' }">Dashboard</router-link>
    <router-link :to="{ name: 'login' }" class="button">Login</router-link>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.nav {
  display: flex;
  align-items: center;
  min-height: 50px;
  padding: 0.2em 1em;
  background: #16c0b0;
}

a {
  font-weight: bold;
  color: #2c3e50;
  margin: auto 0.8em auto 0.4em;
  text-decoration: none;
  border-top: 2px solid transparent;
  border-bottom: 2px solid transparent;
}

button,
.button {
  margin-left: auto;
  background: white;
  text-decoration: none;
  color: #2c3e50;
}

button,
.button.router-link-active {
  color: #2c3e50;
}
</style>
