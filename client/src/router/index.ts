import { createRouter, createWebHistory } from 'vue-router'
import Portal from '../views/Portal.vue'
import Cameras from '../views/Cameras.vue'
import Details from '../views/Details.vue'

const routes = [
  { path: '/', component: Portal },
  { path: '/cameras', component: Cameras },
  { path: '/camera/:id', component: Details, props: true, },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  const isAuthenticated = !!localStorage.getItem('authToken')

  // If route is login or user is authenticated, allow access
  if (to.path === '/' || isAuthenticated) {
    next()
  } else {
    // Redirect to login page
    next('/')
  }
})

export default router