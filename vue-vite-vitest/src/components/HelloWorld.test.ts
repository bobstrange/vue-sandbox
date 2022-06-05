import { mount } from "@vue/test-utils"
import HelloWorld from "./HelloWorld.vue"

test("mount component", () => {
  expect(HelloWorld).toBeTruthy()

  const wrapper = mount(HelloWorld, { props: { msg: "Hi There" } })
  expect(wrapper.get("h1").text()).toEqual("Hi There")
})
