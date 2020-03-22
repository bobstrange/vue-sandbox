import AppHeader from '@/components/AppHeader'
import { mount } from '@vue/test-utils'

describe('AppHeader', () => {
  test('If user is not logged in, do not show logout button', () => {
    const wrapper = mount(AppHeader)
    expect(wrapper.find('button').isVisible()).toBeFalsy()
  })
  test('If user is logged in, show logout button', async () => {
    const wrapper = mount(AppHeader)
    wrapper.setData({ loggedIn: true })

    await wrapper.vm.$nextTick() // Need to wait dom updates
    expect(wrapper.find('button').isVisible()).toBeTruthy()
  })
})
