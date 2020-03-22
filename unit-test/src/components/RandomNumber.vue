<template>
  <div>
    <span test-data="random-number">{{ randomNumber }}</span>
    <button test-data="generate-random-button" @click="getRandomNumber">
      Generate random number
    </button>
  </div>
</template>

<script>
export default {
  name: 'random-number',
  props: {
    min: {
      type: Number,
      default: 1
    },
    max: {
      type: Number,
      default: 10
    }
  },
  data() {
    return {
      randomNumber: 0
    }
  },
  methods: {
    getRandomNumber() {
      this.randomNumber =
        Math.floor(Math.random() * (this.max - this.min + 1)) + this.min
    }
  }
}
</script>
