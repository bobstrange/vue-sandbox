<template>
  <div class="email-display">
    <h2 class="mb-0">
      Subject: <strong>{{ showEmail.subject }}</strong>
    </h2>
    <div>
      <em>
        From {{ showEmail.from }} on
        {{ format(new Date(showEmail.sentAt), 'MMM do yyyy') }}
      </em>
    </div>
    <div v-html="marked(showEmail.body)" />
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, PropType } from 'vue'
import { format } from 'date-fns'
import marked from 'marked'
import { Email } from '@/types/Email'

type MailViewProps = {
  email: Email | null
}
export default defineComponent({
  setup(props: MailViewProps) {
    const showEmail = computed<Partial<Email>>(() => {
      return props.email || {}
    })
    return { showEmail, format, marked }
  },
  props: {
    email: {
      type: Object as PropType<Email | null>,
      required: true
    }
  }
})
</script>

<style scoped></style>
