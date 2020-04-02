import Vue from "vue"
import VueRouter from "vue-router"
import Home from "../views/Home.vue"

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/users",
    name: "Users",
    component: () =>
      import("@/views/Users.vue")
  },
  {
    path: "/posts",
    name: "Posts",
    component: () =>
      import("@/views/Posts.vue")
  },
  {
    path: "/users/:id",
    name: "User",
    component: () => import("@/views/User.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
