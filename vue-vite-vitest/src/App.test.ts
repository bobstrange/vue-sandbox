import { mount } from "@vue/test-utils"
import App from "./App.vue"

test("mount component", async () => {
  expect(App).toBeTruthy()

  const wrapper = mount(App)
  const img = await wrapper.get("img")
  expect(img).toBeDefined()
})
