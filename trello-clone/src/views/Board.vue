<template>
  <div class="board">
    <div class="columns">
      <div class="column" v-for="(column, index) in board.columns" :key="index">
        {{ column }}
      </div>
    </div>
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
  background-color: #02a295;
}

.columns {
  display: flex;
  justify-content: flex-start;
  background-color: white;
}

.column {
  width: 20%;
  margin: 0 auto;
}

</style>
