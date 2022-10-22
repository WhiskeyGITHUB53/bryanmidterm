import { createRouter, createWebHistory } from 'vue-router'
import BasicMathView from '../views/BasicMathView.vue'
import StringAppView from '../views/StringAppView.vue'
import AxiosDemo from '../views/AxiosDemo.vue'
import Area from '../views/Area.vue'
import Quiz from '../views/QuizApp.vue'
import Personal from '../views/Personal.vue'
import Skills from '../views/Skills.vue'



const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
 
    {
      path: '/',
      name: 'Personal',
      component: Personal
    },
    {
      path: '/skills',
      name: 'Skills',
      component: Skills
    },
  
    {
      path: '/stringApp',
      name: 'StringAppView',
      component: StringAppView
    },
    {
    path: '/basicMath',
    name: 'basicMath',
    component: BasicMathView
    },
    {
    path: '/axiosDemo',
    name:'axiosDemo',
    component: AxiosDemo
    },
    {
      path: '/area',
      name:'area',
      component: Area
    },  
    {
      path: '/quiz',
      name:'QuizApp',
      component: Quiz
    },     
  
  ]
})

export default router
