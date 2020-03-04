<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
      <router-link to="/modal">Modal</router-link>
      <router-link to="/list">List</router-link>
    </div>
    <transition name="slide-fade" mode="out-in">
      <router-view />
    </transition>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
html {
  font-size: 62.5%;
}
:root {
  --color-primary: #16c0b0;
  --color-primary-light: #84cf6a;

  --color-grey-light: #666;
  --color-grey-dark: #333;
}

* {
  box-sizing: border-box;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.btn-open,
.btn-close {
  width: 8rem;
  height: 4rem;
  border-radius: 5px;
  background: linear-gradient(to right, var(--color-primary), var(--color-primary-light));
  font-size: 2rem;
  color: white;
  border: none;
  outline: none;
  cursor: pointer;
  margin-top: 2rem;
}

#nav {
  padding: 2rem;
  background-image: linear-gradient(
    to right,
    rgba(64, 64, 64, .4),
    rgba(32, 32, 32, .4)
  );
  display: flex;
  justify-content: center;
  align-items: center;
}

#nav a {
  font-size: 2rem;
  font-weight: bold;
  color: #2c3e50;
  display: inline-box;
  padding: .5rem, 2rem;
  width: 10%;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

.modal {
  width: 250px;
  height: 200px;
  padding: 10px;
  margin: 0 auto;
  margin-top: 20px;
  border-radius: 2%;
  background-color: #e0e0e0;
}



/* Global Transition */
.fade-enter {
  opacity: 0;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease-out;
}
.fade-leave-to {
  opacity: 0;
}

.slide-fade-enter {
  transform: translateX(4rem);
  opacity: 0;
}
.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: all 0.3s ease;
}
.slide-fade-leave-to {
  transform: translateX(-4rem);
  opacity: 0;
}

.slide-up-enter {
  transform: translateY(4rem);
  opacity: 0;
}
.slide-up-enter-active,
.slide-up-leave-active {
  transition: all 0.3s ease;
}
.slide-up-leave-to {
  transform: translateY(-4rem);
  opacity: 0;
}

.slide-up-move {
  transition: transform .3s ease;
}
</style>
