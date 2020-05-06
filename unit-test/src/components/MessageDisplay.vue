<template>
  <p v-if="error" data-testid="message-error">{{ error }}</p>
  <p v-else data-testid="messege">{{ message.text }}</p>
</template>

<script>
import { getMessage } from '@/services/api'

export default {
  data() {
    return {
      message: {},
      error: null
    }
  },
  async created() {
    try {
      console.log('before this.message: ', this.message)
      this.message = await getMessage()
      console.log('this.message: ', this.message)
    } catch (e) {
      this.error = 'Something went wrong'
    }
  }
}
</script>

<style></style>
