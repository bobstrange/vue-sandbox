<template>
  <table class="mail-table">
    <tbody>
      <tr
        v-for="email in unarchivedEmails"
        :key="email.id"
        :class="['clickable', email.read ? 'read' : '']"
        @click="readEmail(email)"
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
        <td><button @click.stop="archiveEmail(email)">Archive</button></td>
      </tr>
    </tbody>
  </table>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from 'vue'
import { format } from 'date-fns'
import axios from 'axios'
import { fetchEmails, updateEmail } from '../apis/emailClient'
import { Email } from '../types/Email'

export default defineComponent({
  async setup() {
    const { data } = await fetchEmails()
    const emails = ref<Email[]>(data)

    const readEmail = async (email: Email) => {
      await updateEmail({ ...email, read: true })
      email.read = true
    }

    const archiveEmail = async (email: Email) => {
      const res = await updateEmail({ ...email, archived: true })
      email.archived = true
    }

    const sortedEmails = computed(() => {
      return emails.value.sort((e1, e2) => {
        return e1.sentAt < e2.sentAt ? 1 : -1
      })
    })
    const unarchivedEmails = computed(() => {
      return sortedEmails.value.filter(email => !email.archived)
    })
    return { emails, readEmail, archiveEmail, format, unarchivedEmails }
  }
})
</script>

<style></style>
