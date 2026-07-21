import { createWebHistory, createRouter } from 'vue-router'
import { MainPage, ComponentsPage } from '../views'
import { componentsRoutes } from '../shared/config/components-routes'

const routes = [
  { path: '/', name: 'main', component: MainPage },
  {
    path: '/components',
    name: 'components',
    component: ComponentsPage,
    children: componentsRoutes,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
