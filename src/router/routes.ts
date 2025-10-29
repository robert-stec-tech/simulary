import type { RouteRecordRaw } from 'vue-router'
import HomeView from '@/views/HomeView.vue'

export const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/simulations',
    name: 'simulations',
    component: () => import('@/views/SimulationsView.vue'),
  },
  {
    path: '/simulations/gravity-falling-ball',
    name: 'gravity-falling-ball',
    component: () => import('@/components/simulation/simulations/GravityFallingBall.vue'),
  },
]
