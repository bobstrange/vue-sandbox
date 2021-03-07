import { ref } from 'vue'

export const useCounter = () => {
  const currentCount = ref(0)
  const incrementCount = () => {
    currentCount.value = currentCount.value + 1
  }

  return {
    currentCount,
    incrementCount
  }
}
