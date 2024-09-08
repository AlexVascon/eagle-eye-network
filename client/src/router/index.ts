import { createRouter, createWebHistory } from 'vue-router'
import Portal from '../views/Portal.vue'
import Cameras from '../views/Cameras.vue'

const routes = [
  { path: '/', component: Portal },
  { path: '/cameras', component: Cameras },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router