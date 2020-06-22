# vite playground

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

