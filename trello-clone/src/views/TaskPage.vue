<template>
  <div class="task-page">
    <v-dialog
      v-model="openDialog"
      width="30rem"
      @click:outside="outsideClicked"
    >
      <v-card class="task-detail">
        <v-card-title>
          {{ task.name }}
        </v-card-title>
        <v-card-text v-if="task.description">
          {{ task.description }}
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
