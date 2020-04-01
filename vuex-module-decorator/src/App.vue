<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style lang="scss">
html {
  font-size: 62.5%;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin: 0 auto;
  max-width: 120rem;
  min-height: 100vh;
  color: #2c3e50;
  background-color: #42b983;
}

h1 {
  font-size: 4rem;
  font-weight: 300;
  color: white;
  padding: 1rem 1rem;
  text-align: left;
}

a {
  font-weight: bold;
  color: #2c3e50;

  &.router-link-exact-active {
    color: white;
  }
}
</style>
