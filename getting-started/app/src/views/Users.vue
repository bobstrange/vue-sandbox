<template>
  <div>
    <UserList :users="users" />
  </div>
</template>

<script lang="ts">
import { defineComponent, onBeforeMount, ref } from "vue";
import { User } from "../models/user";
import { fetchUsers } from "../apis/userClient";
import UserList from "../components/UserList.vue";

export default defineComponent({
  name: "Users",
  setup() {
    const users = ref<User[]>([]);
    onBeforeMount(async () => {
      const data = await fetchUsers();
      users.value = data;
    });
    return { users };
  },
  components: {
    UserList
  }
});
</script>

<style scoped></style>
