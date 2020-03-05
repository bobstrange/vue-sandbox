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


