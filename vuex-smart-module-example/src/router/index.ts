import Vue from "vue"
import VueRouter from "vue-router"
import HomePage from "../views/HomePage.vue"

Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    name: "HomePage",
    component: HomePage
  },
  {
    path: "/users",
    name: "UsersPage",
    component: () =>
      import("@/views/UsersPage.vue")
  }
]

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
})

export default router
