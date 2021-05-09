import AppHeader from '../AppHeader.vue'
import { shallowMount } from '@vue/test-utils'

describe('AppHeader', () => {
  test('If user is not logged in, do not show logout button', () => {
    const wrapper = shallowMount(AppHeader)
    expect(wrapper.find('button').isVisible()).toBeFalsy()
  })

  test('If user is logged in, show logout button', () => {
    const wrapper = shallowMount(AppHeader, { props: { loggedIn: true } })
    expect(wrapper.find('button').isVisible()).toBeTruthy()
  })

  test('If user clicks logout, logout has been called', async () => {
    const logoutMock = jest.fn()
    const wrapper = shallowMount(AppHeader, {
      props: { loggedIn: true, logout: logoutMock },
    })
    await wrapper.find('button').trigger('click')
    expect(logoutMock).toHaveBeenCalled()
  })
})
