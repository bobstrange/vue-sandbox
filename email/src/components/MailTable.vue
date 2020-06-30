<template>
  <table class="mail-table">
    <tbody>
      <tr
        v-for="email in unarchivedEmails"
        :key="id"
        :class="['clickable', email.read ? 'read' : '']"
        @click="onClickEmail(email)"
      >
        <td><input type="checkbox" /></td>
        <td>{{ email.from }}</td>
        <td>
          <p>
            <strong>{{ email.subject }}</strong> - {{ email.body }}
          </p>
        </td>
        <td class="date">
          {{ format(new Date(email.sentAt), 'yyyy do MMM') }}
        </td>
        <td><button @click="onClickArchiveEmail(email)">Archive</button></td>
      </tr>
    </tbody>
  </table>
  <MailView v-if="selectedEmail" :email="selectedEmail" />
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { format } from 'date-fns'
import axios from 'axios'

import MailView from './MailView.vue'

const updateEmail = async email => {
  await axios.put(`http://localhost:3001/emails/${email.id}`, email)
}

export default defineComponent({
  name: 'MailTable',
  async setup() {
    const { data: emails } = await axios.get('http://localhost:3001/emails')

    const selectedEmail = ref(null)

    const onClickEmail = email => {
      email.read = true
      updateEmail(email)
      selectedEmail.value = email
    }

    const onClickArchiveEmail = email => {
      email.archived = true
      updateEmail(email)
    }

    return {
      format,
      emails,
      selectedEmail,
      onClickEmail,
      onClickArchiveEmail
    }
  },
  computed: {
    sortedEmails() {
      return this.emails.sort((left, right) => {
        return left.sentAt < right.sentAt ? 1 : -1
      })
    },
    unarchivedEmails() {
      return this.sortedEmails.filter(email => !email.archived)
    }
  },
  components: {
    MailView
  }
})
</script>
