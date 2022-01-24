<script setup lang="ts">
import { ref, onMounted } from 'vue'
import fetchCount from '../services/fetch-count'
import ControlBar from './ControlBar.vue'

interface Props {
  limit: number
  alertMessageOnLimit?: string
}
const props = withDefaults(defineProps<Props>(), {
  alertMessageOnLimit: 'Oh no something went wrong',
})
const count = ref<number | null>(null)
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
  alertShown.value = false
  count.value += num
}
</script>

<template>
  <div>
    <p>{{ count }}</p>
    <ControlBar @add-count="addCount" @reset-count="count = 0" />
    <div class="alert" v-if="alertShown">{{ props.alertMessageOnLimit }}</div>
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
