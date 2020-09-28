import { createRouter, createWebHistory } from 'vue-router'

const Home = () => import("@/views/home/Home")

const routes = [
  {
    path: '',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
