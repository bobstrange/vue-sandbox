import { computed } from "vue";
import { useStore } from "vuex";

export function useAuthentication() {
  const store = useStore();
  const isLoggedIn = computed<boolean>(() => {
    return store.getters.loggedIn;
  });
  const logout = async () => {
    return await store.dispatch("logout");
  };
  return {
    isLoggedIn,
    logout,
  };
}
