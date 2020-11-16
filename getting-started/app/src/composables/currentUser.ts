import { ref, InjectionKey, provide, inject } from "vue";
import { User } from "../models/user";

export const CurrentUserKey: InjectionKey<CurrentUserStore> = Symbol(
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

export const provideCurrentUser = () => {
  provide(CurrentUserKey, useCurrentUser());
};

export const injectCurrentUser = () => {
  return inject(CurrentUserKey);
};
