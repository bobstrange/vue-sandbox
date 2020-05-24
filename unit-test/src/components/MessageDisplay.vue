<template>
  <p v-if="error" data-testid="message-error">{{ error }}</p>
  <p v-else data-testid="message">{{ message.text }}</p>
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
      this.message = await getMessage()
      console.log('message: ', this.message)
    } catch (e) {
      console.log('Catch error:')
      this.error = 'Something went wrong'
    }
  }
}
</script>

<style></style>
