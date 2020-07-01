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

