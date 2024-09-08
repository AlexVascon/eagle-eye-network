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

export default router