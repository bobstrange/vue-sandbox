import { createStore } from "vuex";
import axios from "axios";

export const store = createStore({
  state: {},
  mutations: {},
  actions: {
    async register({ commit }, credentials) {
      const response = await axios.post(
        "//localhost:8080/register",
        credentials
      );
      console.log("user data is: ", response.data);
    },
  },
});
