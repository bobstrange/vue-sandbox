# vue3 essentials

## vue2の問題点
### 1. コンポーネント内で、機能ごとにコードがまとまっていない
```vue
// Search.vue

<script>
export default {
    data() {
        return {
            // search
            // sorting
            // ...
        }
        
    },
    methods: {
        // search
        // sorting
        // ...
    },
    computed: {
        // search
        // sorting
        // ...
    },
    // ...
}
</script>
```

1つの機能を追加するときに、複数の部分に手をかける必要がある
data, methods, computed, ...

Composition APIを使うことで、論理的なまとまりごとにコードをかける

```vue
export default {
    setup() {
      // search
      // sorting
    }
```

## 2. Componentごとにコードの再利用が完全にはできなかった

3種類のコードを分割する方法

- `mixin`
    - Pros
        - 機能ごとに分割はできる
    - Cons
        - 名前のコンフリクト
        - Unclear relationship(名前空間を共有するので)
        - 簡単には再利用できない
- `mixin factories`
    - Pros
        - 再利用しやすい
        - Clear relationship
    - Cons
        - Weak namespacing
        - 暗黙的なプロパティの追加
        - Runtimeでインスタンスにさわれない
- `scoped-slot`
    - Pros
        - Mixinの問題は解消される
    - Cons
        - Indentの増加
        - 設定が多い
        - パフォーマンスの問題

Vue3で、Composition functionが導入

## Composition API
Composition APIのメリット

- なにが、viewに渡されているかがわかりやすくなる
- どこでプロパティが定義されているかが理解しやすくなる
- コードが論理的にまとまる

```vue
<template>
  <div>Spaces Left: {{ spacesLeft }} out of {{ capacity /* capacity.valueとしなくて良い */ }}</div>
  <button @click="increaseCapacity()">Add</button>
  <h2>Attending</h2>
  <ul>
    <li v-for="(name, index) in {{ attending }}" :key="index">
      {{ name }}
    </li>
  </ul>
</template>

<script>
import { ref, computed } from "vue"

export default {
  setup() {
    const capacity = ref(3) // declare reactive object
    const attending = ref(['John', 'Jane', 'Sam'])

    // Define computed property
    const spacesLeft = computed(() => {
      // reactive objectは.valueで値にアクセスできる
      return capacity.value - attending.value.length
    })

    // Define method
    function increaseCapacity() {
      capacity.value++
    }
    return { capacity, increaseCapacity, attending, spacesLeft } // expose data, method and computed to view
  }
}
</script>
```

Reactive objectについては、下のように定義することもできる。

```vue
<script>
import { reactive, computed } from "vue"

export default {
  setup() {
    // Reactive objectを定義
    const event = reactive({
      capacity: 4,
      attending: ['John', 'Jane', 'Sam'],
      spacesLeft: computed(() => {
        // event.capacity.valueや、event.attending.valueとしなくて良い
        return event.capacity - event.attending.length
      })
    })
    
    // Methodは同じように定義
    function increaseCapacity() { event.capacity++ }
    return { event, increaseCapacity }
  }

}
</script>
```

`value`にアクセスしなくて良いので、JS側はこちらのほうが書きやすい。
ただ、template側が、`event.spacesLeft`, `event.capacity`と、なってしまう。

reactive objectをrefに分解する`toRefs`を使うことで、下のように解決できる。

```vue
<script>
import { reactive, computed, toRefs } from "vue"

export default {
  setup() {
    const event = reactive({
      capacity: 4,
      attending: ['John', 'Jane', 'Sam'],
      spacesLeft: computed(() => {
        return event.capacity - event.attending.length
      })
    })
    
    function increaseCapacity() { event.capacity++ }
    return { ...toRefs(event), increaseCapacity }
  }
}
</script>
```
