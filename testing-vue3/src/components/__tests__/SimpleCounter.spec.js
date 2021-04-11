import { fireEvent, render } from '@testing-library/vue'

import SimpleCounter from '../SimpleCounter.vue'

describe('SimpleCounter', () => {
  test('increments value on click', async () => {
    const { getByText } = render(SimpleCounter)

    getByText('Times clicked: 0')

    const button = getByText('increment')

    await fireEvent.click(button)
    await fireEvent.click(button)

    getByText('Times clicked: 2')
  })
})
