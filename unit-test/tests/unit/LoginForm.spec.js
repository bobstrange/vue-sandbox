import LoginForm from '@/components/LoginForm'
import { mount } from '@vue/test-utils'

describe('LoginForm', () => {
  test('emits an event with a user data payload', async () => {
    const wrapper = mount(LoginForm)
    const input = wrapper.find('[data-test="name-input"]')
    input.setValue('John Doe')
    wrapper.trigger('submit')

    await wrapper.vm.$nextTick()

    const formSubmittedCalls = wrapper.emitted('formSubmitted')
    expect(formSubmittedCalls).toHaveLength(1)

    const payload = wrapper.emitted('formSubmitted')[0][0]
    expect(payload).toEqual({ name: 'John Doe' })
  })
})
