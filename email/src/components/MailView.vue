<template>
  <div class="email-display">
    <h2 class="mb-0">
      Subject: <strong>{{ email.subject }}</strong>
    </h2>
    <div>
      <em>From {{ email.from }} on {{ email.sentAt }}</em>
    </div>
    <div>{{ email.body }}</div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  setup(props) {},
  props: {
    email: {
      type: Object,
      required: true
    }
  }
})
</script>

<style></style>
