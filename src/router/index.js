import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AdminLogin from '../views/AdminLogin.vue'

const routes = [
  {
    path: '/', // Página inicial
    name: 'home',
    component: HomeView,
  },
  {
    path: '/admin-login', // Página de login do administrador
    name: 'admin-login',
    component: AdminLogin,
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
