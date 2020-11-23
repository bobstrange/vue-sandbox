import { fetchUsers } from "@/apis/userClient"

describe("userClient", () => {
  describe("fetchUsers", () => {
    it("returns users", async () => {
      const users = await fetchUsers()

      expect(users[0]).toEqual({
        id: 1,
        firstName: "John",
        lastName: "Doe",
        screenName: "jd",
        email: "john.doe@mail.com",
        password: "j0hhnD0e",
      })
      expect(users[1]).toEqual({
        id: 2,
        firstName: "Adam",
        lastName: "Smith",
        email: "adam.smith@mail.com",
        password: "passw0rd",
        screenName: "AS",
      })
    })
  })
})
