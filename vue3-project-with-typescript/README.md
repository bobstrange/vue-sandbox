# vue3-project-with-typescript
Sandbox for creating a vue3 + TypeScript project with using other vue plugins.

- [vue-next](https://github.com/vuejs/vue-next)
- [vue-router-next](https://github.com/vuejs/vue-router-next)
- [vue-test-utils-next](https://github.com/vuejs/vue-test-utils-next)
- [vuex](https://github.com/vuejs/vuex)
    - 4.0
- [vue-i18n-next](https://github.com/intlify/vue-i18n-next)

## Memo
Run the following command, cd <project> and `npm run serve` then I've got a error on src/shims-tsx.d.ts.

```shell
npx @vue/cli create vue3-project-with-typescript --inlinePreset '{"plugins": {"@vue/cli-plugin-typescript": {"classComponent": false},"vue-cli-plugin-vue-next": {}}}'
```

```
8:36 Cannot use namespace 'Vue' as a type.
     6 |     interface Element extends VNode {}
     7 |     // tslint:disable no-empty-interface
  >  8 |     interface ElementClass extends Vue {}
       |                                    ^
     9 |     interface IntrinsicElements {
    10 |       [elem: string]: any
    11 |     }
E
```

```
10:7 Duplicate string index signature.
     8 |     interface ElementClass extends Vue {}
     9 |     interface IntrinsicElements {
  > 10 |       [elem: string]: any
       |       ^
    11 |     }
    12 |   }
    13 | }
V
```
