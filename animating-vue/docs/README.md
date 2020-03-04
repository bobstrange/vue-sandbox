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
