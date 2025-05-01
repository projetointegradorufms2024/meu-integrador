import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AdminLogin from '../views/AdminLogin.vue'
import AdminDashboard from '../views/AdminDashboard.vue'
import UserDashboard from '../views/UserDashboard.vue'
import ForgotPassword from '../views/ForgotPassword.vue'
import ResetPassword from '../views/ResetPassword.vue'

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
  {
    path: '/admin-dashboard', // Painel do administrador
    name: 'admin-dashboard',
    component: AdminDashboard,
  },
  {
    path: '/forgot-password', // Página de recuperação de senha
    name: 'forgot-password',
    component: ForgotPassword,
  },
  {
    path: '/reset-password', // Página de redefinição de senha
    name: 'reset-password',
    component: ResetPassword,
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
