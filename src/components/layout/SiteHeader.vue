<script setup lang="ts">
import { ref } from 'vue'
import { ArrowBtn } from '../icons'

interface TypeNavLinks {
  name: string
  href: string
}

const emit = defineEmits<{
  (e: 'toggle-sidebar'): void
}>()

const navLinks = ref<TypeNavLinks[]>([
  { name: 'Home', href: '/' },
  { name: 'Components', href: '/components' },
])

const { isOpen } = defineProps<{ isOpen: boolean }>()
</script>

<template>
  <header class="header">
    <div
      :class="['header__side-btn', { '--isOpen': isOpen }]"
      @click="emit('toggle-sidebar')"
    >
      <ArrowBtn fill="var(--primary-color)" />
    </div>
    <nav class="header__nav">
      <RouterLink
        v-for="link in navLinks"
        :to="link.href"
        :key="link.name"
        >{{ link.name }}</RouterLink
      >
    </nav>
  </header>
</template>

<style scoped lang="scss">
.header {
  background: #fff;
  font-weight: bold;
  padding: 0 20px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.07);
  height: 62px;
  display: flex;
  align-items: center;
  z-index: 1;
  position: relative;
  justify-content: flex-end;
  &__side-btn {
    margin-right: auto;
    cursor: pointer;
    svg {
      transform: rotate(180deg);
      transition: 0.2s;
    }
    &.--isOpen svg {
      transform: rotate(0deg);
      transition: 0.2s;
    }
  }
  &__nav {
    display: flex;
    align-items: center;
    gap: 20px;
  }
}

@media screen and (max-width: 765px) {
  .header {
    justify-content: flex-start;
    &__side-btn {
      display: none;
    }
  }
}
</style>
