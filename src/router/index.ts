import { createRouter, createWebHistory, type RouterScrollBehavior } from 'vue-router'
import Home from '../pages/Home.vue'
import Resume from '../pages/Resume.vue'

const scrollBehavior: RouterScrollBehavior = (to, from, savedPosition) => {
  if (savedPosition) return savedPosition
  if (to.hash) {
    return { el: to.hash, top: 80, behavior: 'smooth' }
  }
  // Always reset scroll on route change (avoids progress nav reading leftover scrollY).
  if (to.path !== from.path) {
    return { top: 0, left: 0 }
  }
  return { top: 0 }
}

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', name: 'Home', component: Home },
    { path: '/resume', name: 'Resume', component: Resume },
    { path: '/cv', redirect: '/resume' },
    { path: '/:pathMatch(.*)*', redirect: '/' },
  ],
  scrollBehavior,
})

export default router
