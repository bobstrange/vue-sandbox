import ApiCaller from '@/components/ApiCaller'
import { mount } from '@vue/test-utils'
import { getMessage } from '@/services/api'
import flushPromises from 'flush-promises'

jest.mock('@/services/api')

describe('ApiCaller', () => {
  beforeEach(() => {
    // 各テストの実行前にMockをクリアする
    // (Methodの呼び出された回数など)
    jest.clearAllMocks()
  })

  test('Calls getMessage and displays message', async () => {
    getMessage.mockResolvedValueOnce({ text: 'mock message text' })
    const wrapper = mount(ApiCaller)

    // lifecyclehookの完了を待ち受けるため、flushPromisesで待つ
    // https://vue-test-utils.vuejs.org/ja/guides/testing-async-components.html#%E9%9D%9E%E5%90%8C%E6%9C%9F%E5%8B%95%E4%BD%9C%E3%81%AE%E3%83%86%E3%82%B9%E3%83%88
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
