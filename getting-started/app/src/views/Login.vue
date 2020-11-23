<template>
  <div>
    <form @submit.prevent="requestLogin">
      <label for="email">Email:</label>
      <input type="email" v-model="email" name="email" value />

      <label for="password">Password:</label>
      <input type="password" v-model="password" name="password" value />

      <button type="submit">Login</button>
    </form>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue"
import { login } from "@/apis/authClient"
import { useRouter } from "vue-router"

export default defineComponent({
  setup() {
    const email = ref("")
    const password = ref("")

    const router = useRouter()

    const requestLogin = async () => {
      const result = await login({
        email: email.value,
        password: password.value,
      })

      if (result.data) {
        router.push("Home")
      } else {
        console.error(result.requestErrors)
      }
    }

    return {
      email,
      password,
      requestLogin,
    }
  },
})
</script>

<style lang="scss" scoped>
form {
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 15em;
  margin-bottom: 2em;
}

label {
  margin-bottom: 0.2em;
}

input {
  display: block;
  box-sizing: border-box;
  width: 100%;
  height: 2.4em;
  padding: 0.5em;
  margin-bottom: 1em;
}
</style>
