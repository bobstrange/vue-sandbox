<template>
  <div class="base-layout">
    <header>
      <slot name="header"></slot>
    </header>
    <main>
      <slot name="default"></slot>
    </main>
    <aside>
      <slot name="sidebar"></slot>
    </aside>
    <footer>
      <slot name="footer"></slot>
    </footer>
  </div>
</template>

<script setup>
import { defineProps } from '@vue/runtime-core'

const props = defineProps({
  logo: {
    type: String
  }
})
</script>

<style lang="scss" scoped>
.base-layout {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  background: #f5f5f5;
  width: 960px;
  margin: auto;
}

header {
  width: 100%;
  background: #ccffff;
}

h1 {
  margin: 0;
}

main {
  width: 80%;
  background: #ffccff;
  min-height: 400px;
}

aside {
  width: 20%;
  background: #ffffcc;
}

footer {
  width: 100%;
  background: #afafaf;
}
</style>
