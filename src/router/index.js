import { createRouter, createWebHistory } from 'vue-router'
/*import Home from '../views/Home.vue'
import Features from '../views/Features.vue'
import Playlists from '../views/Playlists.vue'
import Dictionary from '../views/Dictionary.vue'
import About from '../views/About.vue'
import Single from '../views/Single.vue'*/

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue')
  },
  {
    path: '/features',
    name: 'Features',
    component: () => import('../views/Features.vue')
  },
  {
    path: '/playlists',
    name: 'Playlists',
    component: () => import('../views/Playlists.vue')
  },
  {
    path: '/dictionary',
    name: 'Dictionary',
    component: () => import('../views/Dictionary.vue')
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/About.vue')
  },
  {
    path: '/singleone',
    name: 'Single',
    component: () => import('../views/Single.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
