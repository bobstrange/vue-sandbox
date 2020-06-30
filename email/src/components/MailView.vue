<template>
  <div class="email-display">
    <h2 class="mb-0">
      Subject: <strong>{{ email.subject }}</strong>
    </h2>
    <div class="email-meta">
      <em>
        From {{ email.from }} on
        {{ format(new Date(email.sentAt), 'yyyy do MMM') }}
      </em>
    </div>
    <div v-html="marked(email.body)" />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { format } from 'date-fns'
import marked from 'marked'

export default defineComponent({
  setup(props) {
    return {
      format,
      marked
    }
  },
  props: {
    email: {
      type: Object,
      required: true
    }
  }
})
</script>

<style scoped>
.email-meta {
  margin-top: 20px;
}
</style>
