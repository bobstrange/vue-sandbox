<template>
  <div class="task-page">
    <v-container>
      <v-card>
        <v-card-title>
          {{ task.name }}
        </v-card-title>
      </v-card>
    </v-container>
  </div>
</template>

<script lang="ts">
import { mapGetters } from 'vuex'
import { Task } from '@/models/Task'

export default {
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
.task-page {
}
</style>
