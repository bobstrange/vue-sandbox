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
