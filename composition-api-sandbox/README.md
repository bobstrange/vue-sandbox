# vue-composition-api

## Composition APIの導入

```bash
npm install @vue/composition-api
```

[main.js](./src/main.js)で、CompositionAPIを使うように設定

```js
import Vue from 'vue'
import VueCompositionApi from '@vue/composition-api'

Vue.use(VueCompositionApi
```

既存のComponent([UserList.vue](./src/components/UserList.vue))のComponent定義部分
を、VueComponentAPIの`defineComponent`で書き換える

今まで

```vue
export default {
  // component definition
}
```

変更

```vue
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
  // component definition
})
```

一旦これだけで、コードは動作する

## setup
今までの `data`,`computed`, `method`相当の部分を`setup()`内で定義する
reactiveなプロパティは、`ref()`
computedは、`computed()`
methodは、`function`

`setup()`の戻り値で、templateで参照するデータをオブジェクトとして返す

```vue
setup() {
  /* 今までの↓相当
     data() {
       return {
         searchText: ''
       }
     }
   */
  const searchText = ref('')

  /* computed */
  const searchResult = computed(() => {
    const search = searchText.value
    if (search.length === 0) {
      return {}
    }
    return this.props.users.find(user => {
      return (
        user.first_name.includes(search) ||
        user.last_name.includes(search) ||
        user.email.includes(search)
      )
    })
  })

  return {
    searchText,
    searchResult
  }
},
```
