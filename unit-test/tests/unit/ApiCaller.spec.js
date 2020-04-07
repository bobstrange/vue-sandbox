import ApiCaller from '@/components/ApiCaller'
import { mount } from '@vue/test-utils'
import { getMessage } from '@/services/api'
import flushPromises from 'flush-promises'

jest.mock('@/services/api')

describe('ApiCaller', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  test('Calls getMessage and displays message', async () => {
    getMessage.mockResolvedValueOnce({ text: 'mock message text' })
    const wrapper = mount(ApiCaller)

    await flushPromises()
    expect(getMessage).toHaveBeenCalledTimes(1)
    const paragraph = wrapper.find('[data-testid="message"]')
    const message = paragraph.element.textContent
    expect(message).toEqual('mock message text')
  })

  test('Calls getMessage and displays error if api call fails', async () => {
    getMessage.mockRejectedValueOnce(new Error())
    const wrapper = mount(ApiCaller)
    await flushPromises()

    expect(getMessage).toHaveBeenCalledTimes(1)
    const errorParagraph = wrapper.find('[data-testid="message-error"]')
    const message = errorParagraph.element.textContent
    expect(message).toEqual('Something went wrong')
  })
})
