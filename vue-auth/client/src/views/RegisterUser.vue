<template>
  <div>
    <form>
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
import { useStore } from "vuex";

export default defineComponent({
  setup(props, context) {
    const name = ref("");
    const email = ref("");
    const password = ref("");
    const store = useStore();
    const register = () => {
      store.dispatch("register", {
        name: name.value,
        email: email.value,
        password: password.value,
      });
    };

    return {
      name,
      email,
      password,
    };
  },
});
</script>

<style scoped></style>
