---
title: How to introduce @nuxtjs/content
slug: how-to-int-nuxtjs-content
---

# @nuxtjs/contentを導入する

## @nuxtjs/contentとは？

[公式ページ](https://content.nuxtjs.org/)

Markdown, CSV, YAML, JSON などをデータソースにできるHeadlessCMS

特徴として

- 設定が簡単
- VueのComponentをMarkdown内で使用できる
- 全文検索ができる
- `nuxt generate` 使うことでSSGとしても使用できる
- データソースに対する柔軟なAPI (MongoDB like)
- MarkdownのSyntaxHighlighting(using [PrismJS](https://prismjs.com/))
- hooksで拡張ができる

があげられている。

## Install

`@nuxt/content`をプロジェクトに追加

```shell
npm install @nuxt/content
```

nuxtjsの設定ファイルを修正

```js
default export {
  // ...
  modules: [
    '@nuxt/content'
  ],
  content: {

  }
  // ...
}
```

### TypeScript

`tsconfig.json`で、`@nuxt/types`の後に、`@nuxt/content` を入れる

```json
{
  "compilerOptions": {
    "types": [
      "@nuxt/types",
      "@nuxt/content"
    ]
  }
}
```
