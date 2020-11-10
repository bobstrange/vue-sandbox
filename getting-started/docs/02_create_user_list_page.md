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
