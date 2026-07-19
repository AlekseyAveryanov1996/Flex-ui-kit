import { createMemoryHistory, createRouter } from 'vue-router'
import MainPage from '@/views/MainPage.vue'
import ButtonPage from '@/views/ButtonPage.vue'
import TypographyPage from '@/views/TypographyPage.vue'

const routes = [
  { path: '/', component: MainPage },
  { path: '/button', component: ButtonPage },
  { path: '/typography', component: TypographyPage },
]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})

export default router
