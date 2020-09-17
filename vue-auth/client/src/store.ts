import { createStore } from "vuex";
import axios from "axios";
import { User } from "./types";

type State = {
  user?: User;
};

const state: State = {
  user: null,
};

const getters = {
  loggedIn(state): boolean {
    return !!state.user;
  },
};

export const store = createStore({
  state,
  getters,
  mutations: {
    SET_USER_DATA(state, userData) {
      state.user = userData;
      localStorage.setItem("user", JSON.stringify(userData));
      axios.defaults.headers.common[
        "Authorization"
      ] = `Bearer ${userData.token}`;
    },
  },
  actions: {
    async register({ commit }, credentials) {
      const response = await axios.post(
        "//localhost:8080/register",
        credentials
      );
      commit("SET_USER_DATA", response.data);
    },
    async login({ commit }, credentials) {
      const response = await axios.post("//localhost:8080/login", credentials);
      commit("SET_USER_DATA", response.data);
    },
  },
});
