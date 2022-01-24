# TypeScript friendly Vue3

[TypeScript friendly Vue3](https://www.vuemastery.com/courses/typescript-friendly-vue3/introduction-to-the-script-setup-syntax) の写経

## Setup

Vite の Vue + TypeScript の template を使用

```bash
npm init vite@latest ts-vue -- --template vue-ts
```

プロジェクト作成だけでなく npm install も凄い早かったのだが何故？

### IDE

> For the best IDE support, you can use VSCode with the Volar plugin

とのことなので、Vetur はプロジェクト内では無効にした方がよさそう
`.vscode/extensions.json` にも

```json
{
  "recommendations": ["johnsoncodehk.volar"]
}
```

とある

### Lint

いつもので init する

```bash
npx eslint --init
```

生成される `.eslintrc.js` には、 `parserOptions` は設定されているが、
`parser` が設定されておらず、 SFC でエラーになっているので、`parser: 'vue-eslint-parser'`を追加する

また、`'plugin:vue/essential'` を `'plugin:vue/vue3-essential'` に変更する

### defineProps / defineEmits

[official doc](https://v3.vuejs.org/api/sfc-script-setup.html#defineprops-and-defineemits)

> defineProps and defineEmits are compiler macros only usable inside <script setup>. They do not need to be imported, and are compiled away when <script setup> is processed.

- `<script setup>` 内でのみ有効なコンパイラマクロなので、 import する必要は無いし、コンパイルされた後は消える
- `defineProps` は `props` と同様の、`defineEmits` は `emit` と同様のオプションを受け取る

props の方のデフォルト値の与え方

```ts
interface Props {
  foo: string
  bar?: number
}

const props = withDefaults(
  defineProps<Props>(),
  {
    bar: 100
  }
)
```

ESLint で怒られるので、 global で定義しておく必要ありそう

[ESLint Vue 公式](https://eslint.vuejs.org/user-guide/#faq) に、env を設定しろと書かれている

```js
module.exports = {
  env: {
    'vue/setup-compiler-macros': true
  }
}
