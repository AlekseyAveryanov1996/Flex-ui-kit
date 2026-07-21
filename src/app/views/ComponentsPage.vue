<script setup lang="ts">
import { componentsRoutes } from '../shared/config/components-routes'
import { useRoute } from 'vue-router'
const route = useRoute()
</script>

<template>
  <section
    class="components-page"
    v-if="route.path === '/components'"
  >
    <header class="components-page__header">
      <h2 class="components-page__title">UI Components</h2>
      <p class="components-page__description">
        Добро пожаловать в документацию Flex-UI-Kit. Здесь собраны все доступные компоненты
        библиотеки с примерами использования, вариантами оформления, описанием API и поддерживаемыми
        свойствами.
      </p>
      <p class="components-page__description">
        Выберите интересующий компонент из списка ниже, чтобы посмотреть его возможности и примеры
        использования.
      </p>
    </header>
    <nav class="components-page__nav">
      <RouterLink
        class="components-page__link"
        v-for="route in componentsRoutes"
        :key="route.name"
        :to="route"
      >
        {{ route.name }}
      </RouterLink>
    </nav>
  </section>

  <RouterView />
</template>

<style scoped lang="scss">
.components-page {
  &__title {
    margin-bottom: 20px;
  }
  &__description {
    margin-bottom: 16px;
  }
  &__nav {
    margin-top: 40px;
    max-width: 360px;
    margin-left: auto;
    margin-right: auto;
    display: flex;
    flex-wrap: wrap;
    gap: 16px;
  }
  &__link {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: var(--fluid-12-16);
    font-weight: 500;
    padding: 8px 12px;
    border-radius: 4px;
    // border: 1px solid var(--color-primary);
    color: var(--color-white);
    transition: background var(--primary-anim);
    background: var(--color-primary);
    &:hover {
      background: var(--color-primary-light);
    }
  }
}

@media screen and (min-width: 765px) {
  .components-page {
    &__nav {
      max-width: 700px;
    }
  }
}
</style>
