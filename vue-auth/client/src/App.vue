<template>
  <div>
    <TheNav :isLoggedIn="isLoggedIn" @onLogoutClicked="logout" />
    <router-view class="page" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import TheNav from "./components/TheNav.vue";
import { useAuthentication } from "./use/useAuthentication";

export default defineComponent({
  name: "App",
  setup() {
    const { isLoggedIn, logout } = useAuthentication();
    return {
      isLoggedIn,
      logout,
    };
  },
  components: {
    TheNav,
  },
});
</script>

<style>
body {
  text-align: center;
  color: #2c3e50;
  padding: 0em;
  margin: 0em;
}

a:visited {
  color: #2c3e50;
}

.button,
button {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 5em;
  height: 2em;
  margin: 0.5em;
  border-radius: 5px;
  background: linear-gradient(to right, #16c0b0, #84cf6a);
  font-size: 1em;
  color: white;
  border: none;
  outline: none;
}

form {
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 15em;
  margin-bottom: 2em;
}

form p {
  color: red;
}

input {
  display: block;
  box-sizing: border-box;
  width: 100%;
  height: 2.6em;
  padding: 0.5em;
  margin-bottom: 1em;
}

h1 {
  margin-top: 0;
}

.page {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  min-height: calc(100vh - 56px);
}
</style>
