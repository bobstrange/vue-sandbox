# Unit test vue

## What to test

### Component
#### Should be testing 
- Inputs
    - data()
    - Props
    - User interaction
    - Lifecycle methods
    - Store
    - Route params
- Outputs
    - Rendered dom
    - function calls
    - emitted events
    - Store
    - Changes in child components

#### Should not be testing
- Implementation details
- Framework itself
    - prop validation
    - ...

## Component test
Use @vue/test-utils

Make a wrapper object.

```vue
import Component from '@/components/Component'
import { mount } from '@vue/test-utils'

const wrapper = mount(Component)
```

wrapper provides dom api.

```vue
wrapper.find('button')
wrapper.find('.component__button')

// https://vue-test-utils.vuejs.org/ja/api/selectors.html#name
// You can find a component element which matches given name
wrapper.find({ name: 'my-button' })
```

wrapper provides updating component data api

```vue
wrapper.setData({ loggedIn: true })
// Need to wait dom updates
await wrapper.vm.$nextTick()
```
