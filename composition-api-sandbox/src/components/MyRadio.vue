<template>
  <div class="my-radio">
    <input type="radio" :value="orgValue" v-model="value" />
  </div>
</template>

<script>
export default {
  name: 'my-radio',
  props: {
    value: {
      required: true
    },
    orgValue: {
      required: true
    }
  },
  watch: {
    value(newValue) {
      this.$emit('input', newValue)
    }
  }
}
</script>

<style></style>
