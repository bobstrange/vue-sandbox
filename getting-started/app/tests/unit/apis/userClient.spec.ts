import { fetchUsers } from "@/apis/userClient";

describe("userClient", () => {
  describe("fetchUsers", () => {
    it("returns users", async () => {
      const users = await fetchUsers();
      expect(users[0]).toEqual({
        id: 1,
        firstName: "John",
        lastName: "Doe",
        screenName: "jd"
      });
      expect(users[1]).toEqual({
        id: 2,
        firstName: "Adam",
        lastName: "Smith",
        screenName: "AS"
      });
    });
  });
});
