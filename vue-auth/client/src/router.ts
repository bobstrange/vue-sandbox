import { createRouter, createWebHistory } from "vue-router";
import Index from "./components/Index.vue";
import Dashboard from "./components/Dashboard.vue";

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
  ],
});
