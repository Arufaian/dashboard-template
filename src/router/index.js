import { createRouter, createWebHistory } from 'vue-router'
import DashboardLayout from '@/layouts/DashboardLayout.vue'
import DashboardHomeView from '@/views/DashboardHomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: DashboardLayout,
      children: [
        {
          path: '', // Path kosong untuk halaman utama
          name: 'home',
          component: DashboardHomeView,
        },
      ],
    },
  ],
})

export default router
