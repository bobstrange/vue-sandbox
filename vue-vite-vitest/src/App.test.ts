import { mount } from "@vue/test-utils"
import App from "./App.vue"

test("mount component", () => {
  expect(App).toBeTruthy()

  const wrapper = mount(App)
  const img = wrapper.get("img")
  expect(img).toBeDefined()
})
