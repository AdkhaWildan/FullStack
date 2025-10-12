import { createRouter, createWebHistory } from 'vue-router'

import Home from '../views/Home.vue'
import Product from '../views/Product.vue'
import About from '../views/About.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/about',
      name: 'About',
      component: About,
    },
    {
      path: '/product/:id',
      name: 'Product',
      component: Product,
    },
  ],
})

export default router
