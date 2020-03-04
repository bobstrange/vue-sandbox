# vue-animation
## Transitions
When something transition from xxx to yyyy.

- Enter
  - invisible -> visible
    - opacity: 0 -> opacity: 1
    - transition: opacity .5s
- Leave
  - visible -> invisible
    - opacity: 1 -> opacity: 0
    - transition: opacity .5s

Vue provides `Transition` component.
- Enter
  - **from(v-enter)**
  - to(v-enter-to)
  - **v-enter-active**
- Leave
  - from(v-leave)
  - **to(v-leave-to)**
  - **v-leave-active**

### Named transition
`<transition>`ディレクティブを使用できる
`<transition>`ディレクティブには、`name` attributeが設定できる。
例えば↓のように`name="fade"`とした場合には、
対応するCSSのクラスは、`fade-enter(-to)`, `fade-leave(-to)`,
`fade-enter-active`, `fade-leave-active`となる

```html
<transition name="fade">
  <div v-if="isOpen" class="modal">
    <button @click="toggleModal">Close</button>
  </div>
</transition>
```

```css
.fade-enter {
  opacity: 0;
}
.fade-leave-to {
  opacity: 0;
}

.fade-enter-active,
.fade-leave-active
{
  transition: opacity .5s ease-out;
}
```

### Global transition
`App.vue`の`<style></style>`に定義する

### Page transition
Routerにtransitionを設定する場合には、`mode`を設定したほうがよい。
Defaultは`mode="in-out"`だが、この設定だと新しいコンテンツが表示->古いコンテンツが消える->
新しいコンテンツの再描画となり、遷移の見た目がおかしくなる。

そのため、`mode="out-in"`として、古いコンテンツが消える -> 新しいコンテンツが表示される
という風にする。

```html
<transition name="fade" mode="out-in">
  <router-view />
</transition>
```

### Slide-in/outするTransition
↓のようにすると、スライドしながら表示/非表示される

```css
.slide-fade-enter {
  transform: translateX(4rem);
  opacity: 0;
}
.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: all 0.3s ease;
}
.slide-fade-leave-to {
  transform: translateX(-4rem);
  opacity: 0;
}
```

### Group transition
`transition-group`でグループに対するTransitionを定義できる。
`tag=""`で、グループを包むElementのタグを指定できる(デフォルトは`<span>`)
`name=""`でTransition名を指定する。
この場合`name="slide-up"`としているので、`slide-up-...`で定義した、
下から上にスライドインするアニメーションで要素が追加される。

ただし、このままでは、ページ遷移のときには、`router-view`で定義した`slide-fade`の
アニメーションが実行されてしまう。
ページ遷移のとき(コンポーネントが初期表示されるとき)のアニメーションは、
`appear`で設定できる。


```html
<transition-group tag="ul" name="slide-up" appear="slide-up">
  <li v-for="contact in contacts" :key="contact">
    {{ contact }}
  </li>
</transition-group>
```
