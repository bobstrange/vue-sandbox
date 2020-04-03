import { inject } from "vuex-smart-module"
import { UserGetters, UserActions } from "@/store/user.store"
import { User } from "@/models/User"

describe("UserStore", () => {
  test("returns a given id's user", () => {
    const getters = inject(UserGetters, {
      state: {
        users: [
          { id: 1, name: "foo" },
          { id: 2, name: "bar" }
        ] as User[]
      }
    })
    expect(getters.getUser(2)).toEqual({ id: 2, name: "bar" })
  })
})
