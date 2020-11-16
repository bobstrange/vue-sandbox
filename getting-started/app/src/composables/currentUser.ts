import { ref, InjectionKey, inject } from "vue";
import { User } from "@/models/user";

export const CurrentUserStoreKey: InjectionKey<CurrentUserStore> = Symbol(
  "CurrentUserStore"
);

export const useCurrentUser = () => {
  const currentUser = ref<User | null>(null);
  const setCurrentUser = (user: User) => {
    currentUser.value = user;
  };
  return { currentUser, setCurrentUser };
};

export type CurrentUserStore = ReturnType<typeof useCurrentUser>;

export const injectCurrentUser = () => {
  return inject(CurrentUserStoreKey);
};
