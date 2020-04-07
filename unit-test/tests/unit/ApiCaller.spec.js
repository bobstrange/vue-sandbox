import ApiCaller from '@/components/ApiCaller'
import { mount } from '@vue/test-utils'
import { getMessage } from '@/services/api'
import flushPromises from 'flush-promises'

jest.mock('@/services/api')

describe('ApiCaller', () => {
  test('Calls getMessage and displays message', async () => {
    getMessage.mockResolvedValueOnce({ text: 'mock message text' })
    const wrapper = mount(ApiCaller)

    await flushPromises()
    expect(getMessage).toHaveBeenCalledTimes(1)
    const paragraph = wrapper.find('[data-testid="message"]')
    const message = paragraph.element.textContent
    expect(message).toEqual('mock message text')
  })
})
