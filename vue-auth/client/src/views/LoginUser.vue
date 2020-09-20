<template>
  <div>
    <form @submit.prevent="login">
      <label for="email">Email:</label>
      <input type="email" v-model="email" name="email" value />

      <label for="password">Password:</label>
      <input type="password" v-model="password" value />

      <button type="submit" name="button">Login</button>

      <p>{{ error }}</p>

      <router-link :to="{ name: 'register' }">
        Don't have an account? Register.
      </router-link>
    </form>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { useRouter } from "vue-router";
import { useStore } from "vuex";

export default defineComponent({
  setup() {
    const email = ref("");
    const password = ref("");
    const error = ref<string>(null);
    const store = useStore();
    const router = useRouter();

    const login = async () => {
      try {
        await store.dispatch("login", {
          email: email.value,
          password: password.value,
        });
        router.push({ name: "dashboard" });
      } catch (e) {
        console.log(e.response);
        console.log(e.response.data);
        console.log(e.response.data.error);
        error.value = e.response.data.error;
      }
    };
    return {
      email,
      password,
      login,
      error,
    };
  },
});
</script>

<style scoped></style>
