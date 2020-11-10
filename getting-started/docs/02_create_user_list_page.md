# Create User List Page

ユーザー一覧を表示するページを作る。

まず views/Users.vue を仮で作る。

次に Vue Router に、新しく追加した Users 用の設定を追加する。
route/index.ts に ↓ を追加する

```ts
  {
    path: "/users",
    name: "Users",
    component: () =>
      import(/* webpackChunkName: "users" */ "@/views/Users.vue"),
  },
```

↑にある `Home` と異なり、 `component: Users` としないで、`component: () => import(/* webpackChunkName: "users" */ "@/views/Users.vue")` としているのは、Users ページは初期表示には必要無いので、bundle されるファイルを別にして、Users ページに遷移するときに初めて Load することで、初回ロードを短くするため。

次に、App.vue に users ページのリンクを作る
to="/users" としないで、:to='{ name: "Users" }' とすることで、パスの変更時の影響を router のみに留めることができる。

次に ユーザー一覧に表示する為のユーザーを取得するための API を用意する。

HTTP Client は、`fetch` などはあるが、TypeScript の型がつけやすい `axios` を使用する。

`npm install axios`

サーバーの baseURL などは、リソース毎に共通なので、共通設定が反映済みの axios のインスタンスを返す httpClient.ts をまず用意する 

apis/httpClient.ts

baseURL は、開発環境と、本番環境で異なるので、環境変数から設定できるようにしたい。vue-cli で作成したプロジェクトは .env ファイルに、`VUE_APP` の接頭辞をつけて定義している環境変数が自動的に process.env に読み込まれる [参照](https://cli.vuejs.org/guide/mode-and-env.html)

開発環境用の環境変数は、 .env.development に保存する。
( .env.development は git 管理外)

とりあえず、 VUE_APP_API_URL=http://localhost と VUE_APP_PORT=3000 (json-server で設定しているポート) を設定する。


