<template>
  <div class="task-page">
    <v-dialog
      v-model="openDialog"
      width="30rem"
      @click:outside="outsideClicked"
    >
      <v-card class="task-detail">
        <v-card-title>
          <v-textarea
            auto-grow
            rows="1"
            placeholder="Task name"
            @keydown.enter.exact.prevent
            @keyup.enter="updateTask($event, 'name', task)"
            v-on:keydown.enter.shift.exact="newline($event)"
            :value="task.name"
          />
        </v-card-title>
        <v-card-text>
          <v-textarea
            auto-grow
            rows="1"
            placeholder="Task description"
            @keydown.enter.exact.prevent
            @keyup.enter="updateTask($event, 'description', task)"
            @keydown.enter.shift.prevent="newline($event)"
            outlined
            :value="task.description"
          />
        </v-card-text>
      </v-card>
    </v-dialog>
  </div>
</template>

<script lang="ts">
import { mapGetters } from 'vuex'
import { Task } from '@/models/Task'

export default {
  name: 'TaskPage',
  data() {
    return {
      openDialog: true
    }
  },
  methods: {
    outsideClicked() {
      this.$router.push({
        name: 'BoardPage'
      })
    },
    updateTask(event: Event, key: string, task: Task) {
      console.log('Update task')
      if (event.target instanceof HTMLTextAreaElement) {
        const value = event.target.value
        this.$store.dispatch('updateTask', { task, key, value })
      }
    },
    newline(event: Event) {
      console.log('Newline')
      if (event.target instanceof HTMLTextAreaElement) {
        event.target.value += '\n'
      }
    }
  },
  computed: {
    id(): string {
      return this.$route.params.id
    },
    task(): Task | {} {
      const task = this.getTask(this.id)
      return task || {}
    },
    ...mapGetters(['getTask'])
  }
}
</script>

<style scoped>
.task-detail {
}
</style>
