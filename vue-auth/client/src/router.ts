import { createRouter, createWebHistory } from "vue-router";
import Index from "./views/Index.vue";
import Dashboard from "./views/Dashboard.vue";
import RegisterUser from "./views/RegisterUser.vue";
import Login from "./views/LoginUser.vue";

export const router = createRouter({
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
      meta: { requiresAuth: true },
    },
    {
      path: "/register",
      name: "register",
      component: RegisterUser,
    },
    {
      path: "/login",
      name: "login",
      component: Login,
    },
  ],
});

router.beforeEach((to, from, next) => {
  const loggedIn = localStorage.getItem("user");

  if (to.matched.some((record) => record.meta.requiresAuth) && !loggedIn) {
    return next("/");
  }
  next();
});
