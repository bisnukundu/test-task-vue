import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import GameView from '../views/GameView.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/:category',
      name: 'games',
      component: GameView,
      props: (route) => ({ category: route.params.category || 'Jackpot' })
    },
    {
      path: '/',
      redirect: '/Jackpot'
    }
  ]
})

export default router
