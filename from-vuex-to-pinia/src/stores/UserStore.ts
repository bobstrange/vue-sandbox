import { defineStore } from "pinia"

export const useUserStore = defineStore("UserStore", {
  state: () => ({
    user: "Bob Strange",
  }),
  getters: {
    firstName() {
      return this.user.split(" ")[0]
    },
  },
})
