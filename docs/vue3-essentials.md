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
imoprt { ref, computed } from "vue"

export default {
  setup() {
    const capacity = ref(3) // declare reactive object
    const attending = ref(['John', 'Jane', 'Sam'])

    // Define computed property
    const spacesLeft = computed(() => {
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

- なにが、vueに渡されているかがわかりやすくなる
- どこでプロパティが定義されているかが理解しやすくなる

