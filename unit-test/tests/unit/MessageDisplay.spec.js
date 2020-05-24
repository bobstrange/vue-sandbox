import MessageDisplay from '@/components/MessageDisplay'
import { mount } from '@vue/test-utils'
import { getMessage } from '@/services/api'
import flushPromises from 'flush-promises'

jest.mock('@/services/api')
beforeEach(() => {
  jest.clearAllMocks()
})

describe('MessageDisplay', () => {
  it.only('calls getMessage and displays message', async () => {
    const mockMessage = 'Hi there !'
    getMessage.mockResolvedValueOnce({ text: mockMessage })

    // createdのテストをしたいので、Mockを設定した後で、vmを作る必要がある
    const wrapper = mount(MessageDisplay)
    await flushPromises()

    expect(getMessage).toHaveBeenCalledTimes(1)
    const message = wrapper.find('[data-testid="message"]').element.textContent
    expect(message).toEqual(mockMessage)
  })

  it('displays an error when getMessage call fails', async () => {
    const mockError = 'Oops! Something went wrong :-('
    getMessage.mockRejectedValueOnce(mockError)

    const wrapper = mount(MessageDisplay)
    await flushPromises()

    expect(getMessage).toHaveBeenCalledTimes(1)
    const message = wrapper.find('[data-testid="message-error"]').element
      .textContent
    expect(message).toEqual('Something went wrong')
  })
})
