<template>
  <button class="button">
    <div class="loading-spinner" v-if="isLoading">Loading</div>
    <template v-else>
      <template>
        <div class="left-area" v-if="iconLeftName">
          <div class="loading-spinner" v-if="isLoadingLeft">Loading left</div>
          <div class="left-icon" v-else :name="iconLeftName">Left icon</div>
        </div>
        {{ text }}
        <div class="right-area" v-if="iconRightName">
          <div class="loading-spinner" v-if="isLoadingRight">Loading right</div>
          <div class="right-icon" v-else :name="iconLeftName">Right icon</div>
        </div>
      </template>
    </template>
  </button>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'
export default defineComponent({
  props: {
    text: {
      type: String,
      required: true
    },
    isLoading: {
      type: Boolean,
      required: false,
      default: false
    },
    isLoadingLeft: {
      type: Boolean,
      required: false,
      default: false
    },
    isLoadingRight: {
      type: Boolean,
      required: false,
      default: false
    },
    iconLeftName: {
      type: String,
      required: false
    },
    iconRightName: {
      type: String,
      required: false
    }
  }
})
</script>

<style>
</style>
