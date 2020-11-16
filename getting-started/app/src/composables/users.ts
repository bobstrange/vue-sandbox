import { ref, onBeforeMount, inject, InjectionKey } from "vue";
import { fetchUsers } from "@/apis/userClient";
import { User } from "@/models/user";

export const UsersStoreKey: InjectionKey<UsersStore> = Symbol("UsersStore");

export const useUsers = () => {
  const users = ref<User[]>([]);
  const reloadUsers = async () => {
    const data = await fetchUsers();
    users.value = data;
  };

  onBeforeMount(() => reloadUsers());

  return { users, reloadUsers };
};

export type UsersStore = ReturnType<typeof useUsers>;

export const injectUsers = () => {
  const store = inject(UsersStoreKey);
  if (!store) {
    throw new Error("Failed to inject UsersStore");
  }
  return store;
};
