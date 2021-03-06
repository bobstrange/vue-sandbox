# Create Project

## プロジェクトの作成

プロジェクトの作成は、vue-cli と Vite のどちらかが選択肢だが、現状一般的に使用されているであろう vue-cli を使用する。
※ Native ESModules の開発環境はストレスフリーなので Vite でも良いのだが、、、

```shell
npm install -g @vue/cli
npx vue create <project-name>
```

### 設定オプション

vue-cli は色々オプションを訪ねてくるので、以下のようにする。

> Please pick a preset:
Manually select features を選択
> ? Check the features needed for your project: Choose Vue version,
Babel, TypeScript, Router, CSS Pre-processors, Linter, Unit Test を選択
※ Vuex は必要になるまで入れない方針
> Choose a version of Vue.js that you want to start the project with
3.x (Preview) を選択
> Use class-style component syntax?
No を選択 -> 基本的に composition-api の方が TypeScript フレンドリーなのでそちらを使用する。
> Use Babel alongside TypeScript (required for modern mode, auto-detected polyfills, transpiling JSX)?
Babel で TypeScript のトランスパイルをするか？
Yes を選択 -> TypeScript では無く babel でトランスパイルする
>? Use history mode for router? (Requires proper server setup for index fallback in production)
Vue Router のモード
Yes を選択 -> hash mode ではなく history mode を使用する [vue-router](https://router.vuejs.org/guide/essentials/history-mode.html)
> ? Pick a CSS pre-processor (PostCSS, Autoprefixer and CSS Modules are supported by default):
使用する CSS pre-processor
Sass/SCSS (with dart-sass) を選択 -> node-sass より新しい dart-sass を使用する [sass](https://sass-lang.com/dart-sass)
> Pick a linter / formatter config:
使用する Linter
Standard を選択 -> 好みに合わせて選んで良い
> ? Pick additional lint features:
Lint のタイミング
Lint on save を選択 -> commit 時でも別に良い
> ? Pick a unit testing solution:
Unit Test のフレームワーク Jest or mocha + chai
Jest を選択 -> 好みだが mocha + chai より楽な印象
> ? Where do you prefer placing config for Babel, ESLint, etc.?
各種設定ファイルを package.json に書くか個別のファイルに書くか？
In dedicated config files を選択 -> package.json が大きくなるので

## アプリケーションの起動

この時点で、`<project-name>` のディレクトリが出来上がっているので、アプリを立ち上げる。

```shell
cd <project-name>
npm run serve
```

[webpack](https://webpack.js.org/) でビルドが行われ、[webpack-dev-server](https://github.com/webpack/webpack-dev-server) が立ち上げる。
(デフォルトでは localhost:8080)

## テスト用 API サーバーの設定

[`json-server`](https://github.com/typicode/json-server) と [`json-server-auth`](https://github.com/jeremyben/json-server-auth) を使用する。

`npm install -D json-server json-server-auth`

`db.json` を作成

```json
{
    "users": []
}
```

## 起動用のスクリプトの用意

コマンド一つで、 `webpack-dev-server` と `json-server` が両方起動されている状態にしたいので npm スクリプトを作る。
↑の２つのコマンドを並行で実行させるために [`npm-run-all`](https://github.com/mysticatea/npm-run-all) を使う

`npm install -D npm-run-all`

package.json の `"scripts"` を↓のように変更する。
※ "dev:vue" は元の "serve" の中身を移し替える

```json
"scripts": {
  ...
  "dev": "run-p dev:*",
  "dev:vue": "vue-cli-service serve",
  "dev:db": "json-server-auth db.json",
  ...
}
```

これで、 `npm run dev` を実行すると `webpack-dev-server` (デフォルトでは 8080 番ポート) と `json-server` (デフォルトでは 3000番ポート) が起動した状態になる。
port が既存の他のサーバーとぶつかって起動できない場合は、"dev:vue" や "dev:db" の中身に空いている port 番号 `--port xxxx` を明示的に渡す。
