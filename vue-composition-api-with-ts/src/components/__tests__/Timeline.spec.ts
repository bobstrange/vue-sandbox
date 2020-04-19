import { mount } from '@vue/test-utils'
import Timeline from '@/components/Timeline.vue'

describe('Timeline', () => {
  it('renders 3 time periods', () => {
    const wrapper = mount(Timeline)
    expect(wrapper.findAll('a').length).toBe(3)
  })
})
