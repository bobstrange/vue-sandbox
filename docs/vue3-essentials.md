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
