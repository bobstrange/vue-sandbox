<template>
  <div>
    <form @submit.prevent="register">
      <label for="name">Name:</label>
      <input type="text" v-model="name" name="name" value />

      <label for="email">Email:</label>
      <input type="email" v-model="email" name="email" value />

      <label for="password">Password:</label>
      <input type="password" v-model="password" value />

      <button type="submit" name="button">Register</button>
    </form>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { useRouter } from "vue-router";
import { useStore } from "vuex";

export default defineComponent({
  setup(props, context) {
    const name = ref("");
    const email = ref("");
    const password = ref("");
    const store = useStore();
    const router = useRouter();

    const register = async () => {
      await store.dispatch("register", {
        name: name.value,
        email: email.value,
        password: password.value,
      });
      router.push({
        name: "dashboard",
      });
    };

    return {
      name,
      email,
      password,
      register,
    };
  },
});
</script>

<style scoped></style>
