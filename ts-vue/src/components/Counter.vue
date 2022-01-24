<script setup lang="ts">
import { ref, onMounted } from 'vue'
import fetchCount from '../services/fetch-count'

interface Props {
  limit: number
  alertMessageOnLimit: string
}
const props = defineProps<Props>()
const count = ref<number | null>(null)
const step = ref(1)
const alertShown = ref(false)

onMounted(() => {
  fetchCount((initialCount) => {
    count.value = initialCount
  })
})

const addCount = (num = 1) => {
  if (count.value === null) {
    return
  }

  if (count.value >= props.limit) {
    alertShown.value = true
    return
  }
  count.value += num
}
</script>

<template>
  <div>
    <p>{{ count }}</p>
    <button @click="addCount()">Add 1</button>
    <button @click="addCount(step)">Add {{ step }}</button>
    <div class="alert" v-if="alertShown">{{ props.alertMessageOnLimit }}</div>
    <div>
      <label>Step: </label><input type="number" min="0" v-model="step" />
    </div>
  </div>
</template>

<style scoped>
.alert {
  background-color: #f2dede;
  border-color: #ebccd1;
  color: #a94442;
  padding: 15px;
  margin-bottom: 20px;
}
</style>
