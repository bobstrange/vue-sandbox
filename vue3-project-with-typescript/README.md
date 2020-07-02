# vue3-project-with-typescript
Sandbox for creating a vue3 + TypeScript project with using other vue plugins.

- [vue-next](https://github.com/vuejs/vue-next)
- [vue-router-next](https://github.com/vuejs/vue-router-next)
- [vue-test-utils-next](https://github.com/vuejs/vue-test-utils-next)
- [vuex](https://github.com/vuejs/vuex)
    - 4.0
- [vue-i18n-next](https://github.com/intlify/vue-i18n-next)

## Memo
### Create a project.

Run @vue/cli create.

```shell
npx @vue/cli create vue3-project-with-typescript --inlinePreset '{"plugins": {"@vue/cli-plugin-typescript": {"classComponent": false},"vue-cli-plugin-vue-next": {}}}'
```

You have several errors to have fixed.

1. Copy [shim.d.ts](https://github.com/vuejs/vue-router-next/blob/master/playground/shim.d.ts) from vue-router-next project and paste it into [shims-vue.d.ts](./src/shims-vue.d.ts).
2. Remove [shims-tsx.d.ts](./src/shims-tsx.d.ts) for now.
3. Use `defineComponent` instead of `Vue.extend`

See this [commit](https://github.com/bobstrange/vue-sandbox/commit/5b4934cb7937628bc7990fd2164d8441b2c355f3)

### Add vue-router-next to the project
Run `npm install vue-router@next`

- Add [router.ts](./src/router.ts).
    - define several routes.
    - export a router instance.
- Add several pages.
- Put `<router-view /> to [App.vue](./src/App.vue)
- Fix [main.ts](./src/main.ts) to use router.

See this [commit](https://github.com/bobstrange/vue-sandbox/commit/d92ecf53611943e49f353d670764442ccdd7c52a)

### Add vuex to the project
Run `npm install npm install  vuex@v4.0.0-beta.4`

- Add [store/index.ts](./src/store/index.ts)
  - Define root store
- Add several modules under [store/modules](./src/store/modules/)
- Fix [main.ts](./src/main.ts) to use root store.

As the vuex v4 release doc [said](https://github.com/vuejs/vuex/releases/tag/v4.0.0-beta.1), if your project to have `this.$store` working, you need to put the following code.

```ts
// vuex-shim.d.ts

declare module "@vue/runtime-core" {
  // Declare your own store states.
  interface State {
    count: number
  }

  interface ComponentCustomProperties {
    $store: Store<State>;
  }
}
```
