<template>
  <div class="my-radio">
    <input type="radio" v-model="value" />
  </div>
</template>

<script>
export default {
  name: 'my-radio',
  props: {
    value: {}
  },
  watch: {
    value(newValue) {
      this.$emit('input', newValue)
    }
  }
}
</script>

<style></style>
