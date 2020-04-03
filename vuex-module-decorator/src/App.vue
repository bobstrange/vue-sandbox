<template>
  <div id="app">
    <nav>
      <ul>
        <li><router-link :to="{ name: 'Users' }">Users</router-link></li>
        <li><router-link :to="{ name: 'Posts' }">Posts</router-link></li>
      </ul>
    </nav>
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
  margin: 0 auto;
  max-width: 120rem;
  min-height: 100vh;
  color: #2c3e50;
  background: linear-gradient(
    to left bottom,
    rgba(#42b983, 0.9),
    rgba(#42b983, 1)
  );
}

nav {
  padding: 1rem;
  text-align: right;
  background: linear-gradient(to left, rgba(#444444, 0.9), rgba(#444444, 1));

  ul {
    list-style: none;
    li {
      font-size: 1.6rem;
      display: inline-block;
      margin: 0.5rem;
    }
  }
}

h1 {
  margin: 0;
  font-size: 3rem;
  font-weight: 300;
  color: #eeeeee;
  padding: 1rem 1rem;
  text-align: left;
}

h2 {
  margin: 0;
  font-size: 2rem;
  font-weight: 400;
  color: #444444;
  padding: 1rem 1rem;
  text-align: left;
}

a {
  font-weight: bold;
  color: #eeeeee;
  text-decoration: none;

  &.router-link-exact-active {
    color: #42b983;
  }
}
</style>
