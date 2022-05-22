import { defineStore } from "pinia"

export const useUserStore = defineStore("UserStore", {
  state: () => ({
    user: "Bob Strange",
  }),
  getters: {
    firstName: (state) => {
      return state.user.split(" ")[0]
    },
  },
})
