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
