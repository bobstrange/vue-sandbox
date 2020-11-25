import { ref, inject, InjectionKey } from "vue"
import { fetchUsers } from "@/apis/userClient"
import { User } from "@/models/user"

export const UsersStoreKey: InjectionKey<UsersStore> = Symbol("UsersStore")

export const usersStore = () => {
  const users = ref<User[]>([])
  const reloadUsers = async () => {
    const data = await fetchUsers()
    users.value = data
  }

  return { users, reloadUsers }
}

export type UsersStore = ReturnType<typeof usersStore>

export const useUsers = () => {
  const store = inject(UsersStoreKey)
  if (!store) {
    throw new Error("Please provide usersStore before you inject.")
  }
  return store
}
