import RandomNumber from '@/components/RandomNumber'
import { mount } from '@vue/test-utils'

describe('RandomNumber', () => {
  test('By default, randomNumber data value should be 0', () => {
    const wrapper = mount(RandomNumber)
    const randomNumber = parseInt(
      wrapper.find('[test-data=random-number]').element.textContent
    )

    expect(randomNumber).toBe(0)
  })

  test('If button is clicked, randomNumber should be between 1 and 10', async () => {
    const wrapper = mount(RandomNumber)
    wrapper.find('[test-data=generate-random-button]').trigger('click')
    await wrapper.vm.$nextTick()

    const randomNumber = parseInt(
      wrapper.find('[test-data=random-number]').element.textContent
    )
    expect(randomNumber).toBeGreaterThanOrEqual(1)
    expect(randomNumber).toBeLessThanOrEqual(10)
  })

  test('If button is clicked, randomNumber should be between 200 and 300', async () => {
    const wrapper = mount(RandomNumber)
    // mountの第二引数で、MountingOptionを渡せる
    // そこで、propsDataとして渡すことも可能
    // const wrapper = mount(RandomNumber, {
    //   propsData: {
    //     min: 200,
    //     max: 300
    //   }
    // })
    wrapper.setProps({
      min: 200,
      max: 300
    })
    wrapper.find('[test-data=generate-random-button]').trigger('click')
    await wrapper.vm.$nextTick()

    const randomNumber = parseInt(
      wrapper.find('[test-data=random-number]').element.textContent
    )
    expect(randomNumber).toBeGreaterThanOrEqual(200)
    expect(randomNumber).toBeLessThanOrEqual(300)
  })
})
