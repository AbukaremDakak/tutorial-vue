import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/about",
      name: "about",
      component: () => import("../views/AboutUs.vue"),
    },
    {
      path: "/call",
      name: "call",
      component: () => import("../views/CallUs.vue"),
    },
    {
      path: "/details/:id",
      name: "details",
      props: true,
      component: () => import("@/views/Detailes.vue"),
    },
    {
      path: "/:catchAll(.*)",
      component: Home,
    },
  ],
});

export default router;
