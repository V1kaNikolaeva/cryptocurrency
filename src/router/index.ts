import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'currency',
      component: () => import('../views/CurrencyView.vue')
    },
    {
      path: '/saved',
      name: 'saved',
      component: () => import('../views/SavedView.vue')
    }

  ]
})

export default router
