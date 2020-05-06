<template>
  <p v-if="error" data-testid="message-error">{{ error }}</p>
  <p v-else data-testid="messege">{{ message.text }}</p>
</template>

<script>
import { getMessage } from '../services/api'

export default {
  data() {
    return {
      message: {},
      error: null
    }
  },
  async created() {
    try {
      this.message = await this.getMessage
    } catch (e) {
      this.error = 'Something went wrong'
    }
  }
}
</script>

<style></style>
