<template>
  <h1>From vue2 to vue3</h1>
  <input :type="type" v-model="email" />
</template>

<script lang="ts">
export default {
  name: "App",
  data() {
    return {
      email: "",
      type: "email",
    };
  },
};
</script>
