import { createRouter, createWebHistory } from 'vue-router';
import DashboardView from '../views/DashboardView.vue';
import LoginForm from '../components/LoginForm.vue';

const routes = [
  { path: '/', component: LoginForm },
  { path: '/dashboard', component: DashboardView, meta: { requiresAuth: true } }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

// Middleware per proteggere le route
router.beforeEach((to, from, next) => {
  const isAuthenticated = localStorage.getItem('auth') === 'true';
  if (to.meta.requiresAuth && !isAuthenticated) next('/');
  else next();
});

export default router;
