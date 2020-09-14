<template>
  <div class="home">
    <h1>Hi there!</h1>
    <div v-if="isLoggedIn">
      To use this app you'll need to
      <router-link :to="{ name: 'login' }">
        Login
      </router-link>
      or
      <router-link :to="{ name: 'register' }">
        Register
      </router-link>
    </div>
  </div>
</template>

<script>
import { computed, defineComponent } from "vue";
import { useStore } from "vuex";

export default defineComponent({
  setup() {
    const store = useStore();
    const isLoggedIn = computed(() => {
      return store.getters.isLoggedIn;
    });
    return {
      isLoggedIn,
    };
  },
});
</script>

<style></style>
