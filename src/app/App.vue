<script setup lang="ts">
import { ref } from 'vue'
import { SideBar, SiteHeader } from '../components/layout'

const isSideBarOpen = ref(true)

const toggleSideBar = () => {
  isSideBarOpen.value = !isSideBarOpen.value
}
</script>

<template>
  <div class="container">
    <SiteHeader
      @toggle-sidebar="toggleSideBar"
      :is-open="isSideBarOpen"
    />
    <SideBar :is-open="isSideBarOpen" />

    <div
      :class="[
        'content',
        {
          content__full: !isSideBarOpen,
        },
      ]"
    >
      <RouterView />
    </div>
  </div>
</template>

<style scoped lang="scss">
.content {
  max-width: 100%;
  margin-left: 250px;
  padding: 30px 20px;
  transition: 0.2s;
  &__full {
    margin-left: 0;
  }
}

@media screen and (max-width: 765px) {
  .content {
    margin-left: 0;
  }
}
</style>
