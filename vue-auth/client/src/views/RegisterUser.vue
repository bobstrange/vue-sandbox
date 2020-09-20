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

      <ul>
        <li v-for="(error, index) in errors" :key="index">{{ error }}</li>
      </ul>
      <router-link :to="{ name: 'register' }">
        Already have an account? Login.
      </router-link>
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
    const errors = ref<string[]>([]);
    const store = useStore();
    const router = useRouter();

    const register = async () => {
      try {
        await store.dispatch("register", {
          name: name.value,
          email: email.value,
          password: password.value,
        });
        router.push({
          name: "dashboard",
        });
      } catch (e) {
        errors.value = e.response.data.errors;
      }
    };

    return {
      name,
      email,
      password,
      register,
      errors,
    };
  },
});
</script>

<style scoped></style>
