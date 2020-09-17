import { computed } from "vue";
import { useStore } from "vuex";

export function useAuthentication() {
  const store = useStore();
  const isLoggedIn = computed(() => {
    return store.getters.isLoggedIn;
  });
  return {
    isLoggedIn,
  };
}
