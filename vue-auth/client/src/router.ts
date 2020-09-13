import { createRouter, createWebHistory } from "vue-router";
import Index from "./views/Index.vue";
import Dashboard from "./views/Dashboard.vue";
import RegisterUser from "./views/RegisterUser.vue";

export const routes = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: Index,
    },
    {
      path: "/dashboard",
      name: "dashboard",
      component: Dashboard,
    },
    {
      path: "/register",
      name: "register",
      component: RegisterUser,
    },
  ],
});
