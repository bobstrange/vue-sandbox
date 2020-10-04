<template>
  <table class="mail-table">
    <tbody>
      <tr
        v-for="email in unarchivedEmails"
        :key="email.id"
        :class="['clickable', email.read ? 'read' : '']"
        @click="clicked(email)"
      >
        <td><input type="checkbox" /></td>
        <td>{{ email.from }}</td>
        <td>
          <p>
            <strong>{{ email.subject }}</strong> - {{ email.body }}
          </p>
        </td>
        <td class="date">
          {{ format(new Date(email.sentAt), 'MMM do yyyy') }}
        </td>
        <td><button @click="email.archived = true">Archive</button></td>
      </tr>
    </tbody>
  </table>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from 'vue'
import { format } from 'date-fns'
import dummy from '../dummy.json'

interface Email {
  id: number
  from: string
  subject: string
  body: string
  sentAt: string
  archived: boolean
  read: boolean
}

export default defineComponent({
  async setup() {
    const clicked = (email: Email) => {
      email.read = true
    }

    const emails = ref<Email[]>(dummy)
    const sortedEmails = computed(() => {
      return emails.value.sort((e1, e2) => {
        return e1.sentAt < e2.sentAt ? 1 : -1
      })
    })
    const unarchivedEmails = computed(() => {
      return sortedEmails.value.filter(email => !email.archived)
    })
    return { emails, clicked, format, unarchivedEmails }
  }
})
</script>

<style></style>
