import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "quizes",
      component: () => import("../views/Quizes.vue"),
    },
    {
      path: "/quiz/:id",
      name: "quiz",
      component: () => import("../views/Quiz.vue"),
    },
    //   {
    //     path: "/",
    //     name: "home",
    //     component: () => import("../views/Home.vue"),
    //   },
    //   {
    //     path: "/products/:id",
    //     name: "products",
    //     component: () => import("../views/Products.vue"),
    //     children: [
    //       {
    //         path: "owner",
    //         name: "owner",
    //         component: () => import("../views/Owner.vue"),
    //       },
    //     ],
    //   },
    //   {
    //     path: "/about",
    //     name: "about",
    //     component: () => import("../views/About.vue"),
    //   },
    //   {
    //     path: "/:catchAll(.*)*",
    //     name: "404",
    //     component: () => import("../views/errors/404.vue"),
    //   },
  ],
});

export default router;
