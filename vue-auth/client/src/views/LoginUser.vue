<template>
  <div>
    <form @submit.prevent="login">
      <label for="email">Email:</label>
      <input type="email" v-model="email" name="email" value />

      <label for="password">Password:</label>
      <input type="password" v-model="password" value />

      <button type="submit" name="button">Login</button>
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
    const store = useStore();
    const router = useRouter();

    const login = async () => {
      await store.dispatch("login", {
        email: email.value,
        password: password.value,
      });
      router.push({ name: "dashboard" });
    };
    return {
      email,
      password,
      login,
    };
  },
});
</script>

<style scoped></style>
