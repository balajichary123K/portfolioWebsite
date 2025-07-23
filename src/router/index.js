import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/components/Home.vue'
import About from '@/components/About.vue'
import Contact from '@/components/Contact.vue'
import Skills from '@/components/Skills.vue'
import Projects from '@/components/Projects.vue'
import Resume from '@/components/Resume.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path:'/',
      redirect:'/home'
    },
    {
      path: '/home',
      component: Home,
    },
    {
     path: '/about',
     component: About,
    },
    {
      path: '/contact' ,
      component: Contact,
    },
    {
      path: '/skills',
      component:Skills,
    },
    {
      path:'/projects',
      component:Projects,
    },
    {
      path:'/resume',
      component:Resume,
    }
  ],
})

export default router
