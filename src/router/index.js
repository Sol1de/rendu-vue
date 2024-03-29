import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/ClavierView',
      name: 'ClavierView',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/ClavierView.vue')
    },
    {
      path: '/ContactsView',
      name: 'ContactsView',
      component: () => import('../views/ContactsView.vue')
    }
  ]
})

export default router
