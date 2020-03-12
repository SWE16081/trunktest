import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Login from '@/components/login/login'
import Home from '@/components/home/home'
import Header from '@/components/comment/header/header'
import PersonManagement from '@/components/personManagement/personManagement'
import PersonSlide from '@/components/comment/personSlide/personSlide'
import Attendance from '@/components/attendance/attendance'
import Results from '@/components/results/results'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path:'/login',
      name:'Login',
      component:Login
    },
    {
      path:'/home',
      name:'Home',
      component:Home,
      children:[
        {
          path:'/home/results',
          name:'Results',
          component:Results
        },
        {
          path:'/home/attendance',
          name:'Attendance',
          component:Attendance
        }
      ],
      redirect: '/home/Results'
      
    },
    {
      path:'/header',
      name:'Header',
      component:Header
    },
    {
      path:'/personSlide',
      name:'PersonSlide',
      component:PersonSlide
    },
  ],
  mode:'history'
})
