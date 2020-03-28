<template>
  <div class="board">
    <v-container>
      <v-row class="board__titles">
        <v-col
          class="column"
          v-for="(column, index) in board.columns"
          :key="index"
        >
          <v-card
            class="mx-auto column__base"
            max-width="344"
            outlined
            style="background-color: #D4DEE5;"
          >
            <v-card-title class="column__title">
              {{ column.name }}
            </v-card-title>

            <v-card
              class="mx-auto column__task"
              max-width="344"
              outlined
              v-for="(task, i) in column.tasks"
              :key="i"
              @click="taskClicked(task)"
            >
              <v-card-title>
                {{ task.name }}
              </v-card-title>
              <v-card-text v-if="task.description">
                {{ task.description }}
              </v-card-text>
            </v-card>
            <v-textarea
              class="column__add-task"
              auto-grow
              rows="1"
              placeholder="+ Add new task"
              @keydown.enter.exact.prevent
              @keyup.enter="createTask($event, column.tasks)"
              v-on:keydown.enter.shift.exact="newline($event)"
            />
          </v-card>
        </v-col>
      </v-row>
    </v-container>
    <router-view />
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from '@vue/composition-api'
import { Task } from '@/models/Task'

export default defineComponent({
  name: 'BoardPage',
  setup(props, context) {
    const board = computed(() => context.root.$store.state.board)
    function taskClicked(task: Task) {
      context.root.$router.push({
        name: 'TaskPage',
        params: { id: task.id }
      })
    }
    function createTask(event: Event, tasks: Task[]) {
      if (event.target instanceof HTMLTextAreaElement) {
        const name = event.target.value
        context.root.$store.dispatch('createTask', {
          tasks,
          name
        })
      }
    }
    function newline(event: Event) {
      if (event.target instanceof HTMLTextAreaElement) {
        event.target.value += '\n'
      }
    }
    return {
      board,
      taskClicked,
      createTask,
      newline
    }
  },
  components: {}
})
</script>

<style scoped>
.board {
  background-color: #469961;
  min-height: 100vh;
}

.column__base {
  padding: 0.5rem;
}

.column__task {
}

.column__title {
  font-size: 1.2rem;
  padding: 0.2rem 0.2rem;
}

.column__task:not(:last-child) {
  margin-bottom: 0.5rem;
}

.column__add-task {
  padding: 0 2px;
}
</style>
