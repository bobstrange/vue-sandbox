import { onBeforeMount } from 'vue'

import { onBeforeUnmount } from 'vue'

export type KeyCombo = {
  key: KeyboardEvent['key']
  fn: Function
}

export const useKeydown = (keyCombos: KeyCombo[]) => {
  const onKeydown = (event: KeyboardEvent) => {
    const kc = keyCombos.find(kc => kc.key === event.key)
    if (kc) {
      kc.fn()
    }
  }
  window.addEventListener('keydown', onKeydown)
  onBeforeUnmount(() => {
    window.removeEventListener('keydown', onKeydown)
  })
}
