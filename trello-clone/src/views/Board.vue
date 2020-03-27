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
            >
              <v-card-title>
                {{ task.name }}
              </v-card-title>
              <v-card-text v-if="task.description">
                {{ task.description }}
              </v-card-text>
            </v-card>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'Home',
  components: {},
  computed: {
    ...mapState({ board: 'board' })
  }
}
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
</style>
