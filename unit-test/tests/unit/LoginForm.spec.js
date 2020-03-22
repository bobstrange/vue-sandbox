import LoginForm from '@/components/LoginForm'
import { mount } from '@vue/test-utils'

describe('LoginForm', () => {
  test('emits an event with a user data payload', async () => {
    const wrapper = mount(LoginForm)

    // data-test属性で指定している名前で elementを取得する
    const input = wrapper.find('[data-test="name-input"]')

    // input要素を変更して、formをsubmitする
    input.setValue('John Doe')
    wrapper.trigger('submit')

    await wrapper.vm.$nextTick()

    // このときテストする必要があるもの
    // 1. ComponentがformSubmittedのイベントを1回emitしていること
    // 2. emitされたイベントの内容が、期待どおりであること(この場合は、ユーザが入力した名前)

    const formSubmittedCalls = wrapper.emitted('formSubmitted')
    expect(formSubmittedCalls).toHaveLength(1)

    const payload = wrapper.emitted('formSubmitted')[0][0]
    expect(payload).toEqual({ name: 'John Doe' })
  })
})
