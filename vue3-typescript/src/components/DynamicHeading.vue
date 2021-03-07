<script lang="ts">
import { h } from 'vue'

export default {
  props: {
    level: {
      type: String,
      default: '1'
    }
  },
  render() {
    return h(`h${this.level}`, `This is heading ${this.level}`)
  }
}
</script>

<style></style>
