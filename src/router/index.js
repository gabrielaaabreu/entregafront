import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import FaqView from '../views/FaqView.vue'
import RegisterForm from '../components/RegisterForm.vue'
import RecomendationsView from '../views/RecomendationsView.vue'
import PlayList from '../views/PlayList.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/register',
      name: 'register',
      component: RegisterForm
    },
    {
      path: '/faq',
      name: 'faq',
      component: FaqView
    },
    {
      path: '/recomendations',
      name: 'recomendations',
      component: RecomendationsView

    },
    {
      path: '/playlist',
      name:"playlist",
      component: PlayList
    },
  ]
})

export default router
