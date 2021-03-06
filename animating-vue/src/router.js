import Vue from "vue";
import Router from "vue-router";
import Home from "./pages/Home.vue";
import Modal from './pages/Modal.vue'

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL || '/',
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/modal",
      name: "modal",
      component: Modal
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "./pages/About.vue")
    },
    {
      path: "/list",
      name: "list",
      component: () => import(/* webpackChunkName: "list" */ "./pages/List.vue")
    },
    {
      path: '/drawer',
      name: 'drawer',
      component: () =>
        import(/* webpackChunkName: "list" */ './pages/Drawer.vue')
    }
  ]
});
