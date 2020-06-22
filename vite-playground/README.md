# vite playground

## [Getting Started](https://github.com/vitejs/vite#getting-started)

Vue3でのProjectの作り方

```shell
npm init vite-app <app-name>

# reactや、preactのtemplateもあるらしい
# npm init vite-app --template react <app-name>
# npm init vite-app --template preact <app-name>

cd <app-name>
npm install
npm run dev
```

`@pika/react`, `@pika/react-dom`を使っているみたい

## [Bare Module Resolving](https://github.com/vitejs/vite#bare-module-resolving)
Viteは、NodeJSや、module bundlerなどと同様に、bare module の名前解決ができる。

```js
import { createApp } from 'vue'
import App from './App.vue'
import './index.css'

createApp(App).mount('#app')
```

### Bare module とは

Native es importでは、`import`は、絶対パス or 相対パスである必要がある。
NodeJSや、webpackなどのmodule bundlerでは、パスがなくても名前解決してくることができるが、
ブラウザではまだサポートされていない。

> Certain environments, like Node.js or bundle tools allow bare modules, without any path, as they have their own ways for finding modules and hooks to fine-tune them. But browsers do not support bare modules yet.

[参考](https://javascript.info/modules-intro#no-bare-modules-allowed)

## [TypeScript](https://github.com/vitejs/vite#typescript)
Viteはデフォルトで、TypeScriptをサポートしている。
ただ、コンパイル対象は`.ts` ファイルのみで、型のチェックはしてくれない。
型のチェックは、エディタや、コマンド(npx tsc --noEmit)でやってね、ってこと。

TypeScriptのコンパイルは、[esbuild](https://github.com/evanw/esbuild)を使用しているので、すごい早いらしい。
ただ、`esbuild` は、型情報無しでトランスパイルを行うので、 `const enum` とか、 `implicit type-only imports` とかが使えないとのこと。
`tsconfig.json`に、`"isolatedModules": true` をセットしておいたほうが良いとのこと。

## [CSS/JSON Importing](https://github.com/vitejs/vite#css--json-importing)

JS内に、`.css`や、`.json`のimportを記述できる (`<script>` タグ内や、 `*.vue` SFCを含む)

`.css` は、ファイル名が `.module.css` で終わっていない場合は、何もexportしない。
([CSSModules](https://github.com/vitejs/vite#css-modules)の項目参照)

`.css`ファイルを、Importすると開発時には、cssのルールが当たった状態になり、
production buildでは、 `style.css` に定義が含まれるようになる。
