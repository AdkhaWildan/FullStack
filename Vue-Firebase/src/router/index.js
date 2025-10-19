import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Post from '../views/Post.vue'
import AddPost from '../views/AddPost.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/posts/:id',
      name: 'Posts',
      component: Post,
    },
    {
      path: '/add-post',
      name: 'AddPost',
      component: AddPost,
    },
  ],
})

export default router
