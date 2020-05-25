import MessageContainer from '@/components/MessageContainer'
import { mount } from '@vue/test-utils'

describe('MessageContainer', () => {
  it('wraps MessageDisplay component', () => {
    const wrapper = mount(MessageContainer, {
      stubs: {
        MessageDisplay: '<p v-else data-testid="message">Hi there</p>'
      }
    })

    const message = wrapper.find('[data-testid="message"]').element.textContent
    expect(message).toEqual('Hi there')
  })
})
