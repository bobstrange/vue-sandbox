<template>
  <table class="mail-table">
    <tbody>
      <tr
        v-for="email in unarchivedEmails"
        :key="email.id"
        :class="['clickable', email.read ? 'read' : '']"
        @click="openEmail(email)"
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
  <MailView v-if="focusedEmail" :email="focusedEmail" />
</template>

<script lang="ts">
import { computed, defineComponent, ref } from 'vue'
import { format } from 'date-fns'
import axios from 'axios'
import { fetchEmails, updateEmail } from '../apis/emailClient'
import { Email } from '../types/Email'
import MailView from './MailView.vue'

export default defineComponent({
  async setup() {
    const { data } = await fetchEmails()
    const emails = ref<Email[]>(data)

    const focusedEmail = ref<Email | null>(null)

    const openEmail = async (email: Email) => {
      await updateEmail({ ...email, read: true })
      focusedEmail.value = email
      email.read = true
    }

    const archiveEmail = async (email: Email) => {
      await updateEmail({ ...email, archived: true })
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
    return {
      emails,
      focusedEmail,
      openEmail,
      archiveEmail,
      format,
      unarchivedEmails
    }
  },
  components: {
    MailView
  }
})
</script>

<style></style>
