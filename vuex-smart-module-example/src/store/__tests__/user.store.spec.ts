import { inject } from "vuex-smart-module"
import { UserGetters, UserActions } from "@/store/user.store"
import { User } from "@/models/User"

describe("UserStore", () => {
  let getters: UserGetters

  beforeEach(() => {
    getters = inject(UserGetters, {
      state: {
        users: [
          { id: 1, name: "foo" },
          { id: 2, name: "bar" }
        ] as User[]
      }
    })
  })

  test("returns a given id's user", () => {
    expect(getters.getUser(2)).toEqual({ id: 2, name: "bar" })
  })

  test("returns undefined if given id user does not exist", () => {
    expect(getters.getUser(3)).toBeUndefined()
  })
})
