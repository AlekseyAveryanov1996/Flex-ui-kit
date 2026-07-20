<script setup lang="ts">
import { ref } from 'vue'

interface TypesLink {
  name: string
  href: string
}

interface ComponentProps {
  isOpen?: boolean
}

const { isOpen } = defineProps<ComponentProps>()

const links = ref<TypesLink[]>([
  {
    name: 'Components',
    href: '/components',
  },
])
</script>

<template>
  <div :class="['sidebar', { '--isOpen': isOpen }]">
    <RouterLink
      v-for="link in links"
      :key="link.name"
      :to="link.href"
      class="sidebar__link"
    >
      {{ link.name }}
    </RouterLink>
  </div>
</template>

<style scoped lang="scss">
.sidebar {
  position: fixed;
  left: 0;
  top: 62px;
  height: 100%;
  background: #fff;
  width: 250px;
  padding: 20px;
  transition: 0.2s;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.07);
  transform: translateX(-250px);
  &__link {
    display: block;
    border-radius: 12px;
    padding: 10px;
    border: 2px solid #fff;
    transition: 0.2s;
    margin-bottom: 10px;
    &:hover {
      border-color: var(--primary-color);
    }
  }
  &.--isOpen {
    transform: translateX(0);
    transition: 0.2s;
  }
}

@media screen and (max-width: 765px) {
  .sidebar.--isOpen {
    transform: translateX(-250px);
  }
}
</style>
