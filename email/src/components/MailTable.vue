<template>
  <table class="mail-table">
    <tbody>
      <tr
        v-for="email in unarchivedEmails"
        :key="id"
        :class="['clickable', email.read ? 'read' : '']"
        @click="onClickReadEmail(email)"
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
        <td><button @click="email.archived = true">Archive</button></td>
      </tr>
    </tbody>
  </table>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { format } from 'date-fns'
import axios from 'axios'

export default defineComponent({
  name: 'MailTable',
  async setup() {
    const { data: emails } = await axios.get('http://localhost:3001/emails')
    const onClickReadEmail = async email => {
      email.read = true
      await axios.put(`http://localhost:3001/emails/${email.id}`, email)
    }

    return {
      format,
      emails,
      onClickReadEmail
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
  }
})
</script>
