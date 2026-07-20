import { createWebHistory, createRouter } from 'vue-router'
import { MainPage, ComponentsPage } from '../views'

const routes = [
  { path: '/', name: 'main', component: MainPage },
  { path: '/components', name: 'components', component: ComponentsPage },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
