import MessageDisplay from '@/components/MessageDisplay'
import { mount } from '@vue/test-utils'
import { getMessage } from '@/services/api'
import flushPromises from 'flush-promises'

jest.mock('@/services/api')

describe('MessageDisplay', () => {
  let wrapper

  beforeEach(() => {
    wrapper = mount(MessageDisplay)
  })

  it('calls getMessage and displays message', async () => {
    getMessage.mockResolvedValue({ text: 'Hi there' })
    await flushPromises()

    console.log('wrapper.body: ', wrapper.body)
    expect(getMessage).toBeCalledTimes(1)
    const message = wrapper.find('[data-testid="message"').element.textContent
    expect(message).toEqual('Hi there')
  })

  it('displays an error when getMessage call fails', () => {
  })
})
