import { createRouter, createWebHistory, type RouterScrollBehavior } from 'vue-router'
import Home from '../pages/Home.vue'
import Contact from '../pages/Contact.vue'
import Resume from '../pages/Resume.vue'

const scrollBehavior: RouterScrollBehavior = (to, _from, savedPosition) => {
  if (savedPosition) return savedPosition
  if (to.hash) {
    return { el: to.hash, top: 80, behavior: 'smooth' }
  }
  return { top: 0 }
}

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', name: 'Home', component: Home },
    { path: '/contact', name: 'Contact', component: Contact },
    { path: '/:pathMatch(.*)*', redirect: '/' },
  ],
  scrollBehavior,
})

export default router
