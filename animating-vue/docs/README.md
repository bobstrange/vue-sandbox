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

### use v-move
`v-move`を使うと、ソートなどでtransition group内の要素が入れ替わるときの
アニメーションを設定できる。
`transition-name-move`で、`transition`を設定すればよい。

```css
.slide-up-move {
  transition: transform .3s ease;
}
```

## JavaScript hook
プラクティスとしては、hook名と呼ばれるメソッド名は同じにする。

```html
<transition
  @before-enter="beforeEnter"
  @enter="..."
  @after-enter=""
  @enter-cancelled=""

  @before-leave=""
  @leave=""
  @after-leave=""
  @leave-cancelled=""
>
```

```html
<transition
  @before-enter="beforeEnter"
  @enter="enter"
  @leave="leave"
  :css="false"
>
  <div v-if="isOpen" class="drawer">
    <img src="../assets/avatar.png" alt="avatar" />
    <div></div>
    <div></div>
    <div></div>
    <div></div>
  </div>
</transition>
```

> JavaScript のみのトランジションのために明示的に v-bind:css="false" を追加するのは良いアイデアです。これは、Vue に CSS 判定をスキップさせます。また、誤って CSS ルールがトランジションに干渉するのを防ぎます。

各JavaScriptのhookメソッドは、第一引数として `element` 第二引数として、 `done`コールバックを受け取る。

`enter`, `leave`では、アニメーション終了後に `done` コールバックを実行する必要がある。

https://jp.vuejs.org/v2/guide/transitions.html#JavaScript-%E3%83%95%E3%83%83%E3%82%AF

> JavaScript のみを利用したトランジションの場合は、done コールバックを enter と leave フックで呼ぶ必要があります。呼ばない場合は、フックは同期的に呼ばれ、トランジションはただちに終了します。

```js
methods: {
  beforeEnter(el) {
    el.style.opacity = 0
    el.style.width = '0rem'
  },
  enter(el, done) {
    Velocity(
      el,
      { opacity: 1, width: '5rem'},
      { duration: 1000, easing: 'easeOutBounce', complete: done }
    )
  },
  leave(el, done) {
    Velocity(
      el,
      { opacity: 0, width: '0rem'},
      { duration: 1000, easing: 'easeInCubic', complete: done }
    )
  }
}
```
※[`velocity-animate`](https://www.npmjs.com/package/velocity-animate)
を使用すると、elementに対してAnimationの設定ができる。

