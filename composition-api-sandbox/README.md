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
