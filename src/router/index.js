import { createRouter, createWebHistory } from 'vue-router'
import WelcomeComponent from '../views/Welcome'
import ChatroomComponent from '../views/Chatroom'
import {auth} from '../firebase/config'

const routes = [
  {
    path: '/',
    name: 'Welcome',
    component: WelcomeComponent,
    beforeEnter(to, from, next){
      let user = auth.currentUser;
      if(!user){
        next();
      }else{
        next({name: 'Chatroom'});
      }
    }
  },
  {
    path: '/chatroom',
    name: 'Chatroom',
    component: ChatroomComponent,
    beforeEnter(to, from, next){
      let user = auth.currentUser;
      if(user){
        next();
      }else{
        next({name: 'Welcome'})
      }
    }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
