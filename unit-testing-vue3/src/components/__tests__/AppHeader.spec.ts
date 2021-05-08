import AppHeader from '../AppHeader.vue'
import { shallowMount } from '@vue/test-utils'

describe('AppHeader', () => {
  test('If user is not logged in, do not show logout button', () => {
    const wrapper = shallowMount(AppHeader)
    expect(wrapper.find('button').isVisible()).toBeFalsy()
  })

  test('If user is logged in, show logout button', async () => {
    const wrapper = shallowMount(AppHeader)
    await wrapper.setData({ loggedIn: true })
    expect(wrapper.find('button').isVisible()).toBeTruthy()
  })
})
