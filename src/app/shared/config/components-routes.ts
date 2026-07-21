import type { RouteRecordRaw } from 'vue-router'
const pages = import.meta.glob('../../views/components/**/index-components.vue')

export const componentsRoutes: RouteRecordRaw[] = Object.entries(pages).map(([path, component]) => {
  const slug = path.split('/').at(-2)!
  return {
    path: slug,
    name: slug,
    component,
  }
})
