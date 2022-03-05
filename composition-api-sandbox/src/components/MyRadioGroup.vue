<template>
  <div class="my-radio-group">
    <div class="radio" v-for="({ name }, index) in options" :key="index">
      <label>
        {{ name }}
        <MyRadio v-model="value" :orgValue="name" />
      </label>
    </div>
  </div>
</template>

<script>
import MyRadio from '@/components/MyRadio.vue'

export default {
  name: 'my-radio',
  props: {
    value: {
      required: true
    },
    options: {
      type: Array,
      required: true
    }
  },
  components: {
    MyRadio
  },
  watch: {
    value(newValue) {
      this.$emit('input', newValue)
    }
  }
}
</script>

<style></style>
