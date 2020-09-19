<template>
  <div class="nav">
    <router-link :to="{ name: 'home' }">Home</router-link>
    <router-link :to="{ name: 'dashboard' }" v-if="isLoggedIn">
      Dashboard
    </router-link>
    <router-link :to="{ name: 'login' }" class="button" v-if="!isLoggedIn">
      Login
    </router-link>
    <button v-else type="button" class="logout" @click="logout">
      Logout
    </button>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";

export default defineComponent({
  setup(props, context) {
    const isLoggedIn = computed(() => {
      return props.isLoggedIn;
    });
    const logout = () => {
      context.emit("onLogoutClicked");
    };
    return {
      isLoggedIn,
      logout,
    };
  },
  props: {
    isLoggedIn: {
      type: Boolean,
      required: true,
    },
  },
});
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
