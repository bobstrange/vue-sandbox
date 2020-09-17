import { computed } from "vue";
import { useStore } from "vuex";

export function useAuthentication() {
  const store = useStore();
  const isLoggedIn = computed<boolean>(() => {
    return store.getters.loggedIn;
  });
  return {
    isLoggedIn,
  };
}
