<template>
  <div class="nav">
    <nuxt-link to="/" class="brand">
      Real world events
    </nuxt-link>
    <nav>
      <nuxt-link to="/" class="brand">List</nuxt-link>
      <nuxt-link to="/" class="brand">Create</nuxt-link>
    </nav>
  </div>
</template>

<style scoped>
.brand {
  font-weight: 400;
  font-size: 1.5em;
  color: #39b982;
  text-decoration: none;
}
.brand:not(:first-child) {
  margin-left: 1rem;
}

.nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
}
.nav .nav-item {
  box-sizing: border-box;
  margin: 0 5px;
  color: rgba(0, 0, 0, 0.5);
  text-decoration: none;
}
.nav .nav-item.router-link-exact-active {
  color: #39b982;
  border-bottom: solid 2px #39b982;
}
.nav a {
  display: inline-block;
}
</style>
