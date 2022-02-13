import { createRouter, createWebHistory } from 'vue-router'
import WelcomeComponent from '../views/Welcome'
import ChatroomComponent from '../views/Chatroom'

const routes = [
  {
    path: '/',
    name: 'Welcome',
    component: WelcomeComponent
  },
  {
    path: '/chatroom',
    name: 'Chatroom',
    component: ChatroomComponent
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
