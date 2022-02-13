import { createRouter, createWebHistory } from 'vue-router'
import WelcomeComponent from '../views/Welcome'

const routes = [
  {
    path: '/',
    name: 'Welcome',
    component: WelcomeComponent
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
