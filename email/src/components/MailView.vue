<template>
  <div class="email-display">
    <div>
      <button>Archive</button>
      <button @click="toggleRead()">
        {{ showEmail.read ? 'Mark Unread(r)' : 'Mark Read(r)' }}
      </button>
      <button>Newer</button>
      <button>Older</button>
    </div>
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
import { useKeydown } from '@/composables/useKeydown'

export default defineComponent({
  setup(props, context) {
    const showEmail = computed<Partial<Email>>(() => {
      console.log('Show email called: ', props.email)
      return props.email
    })
    const toggleRead = async () => {
      const email = showEmail.value
      context.emit('on-email-update', { ...email, read: !email.read })
    }

    useKeydown([
      {
        key: 'r',
        fn: toggleRead
      }
    ])

    return { showEmail, format, marked, toggleRead }
  },
  props: {
    email: {
      type: Object as PropType<Email>,
      required: true
    }
  }
})
</script>

<style scoped></style>
