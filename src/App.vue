<script setup lang="ts">
import { SideBar, SiteHeader } from './components/layout'
</script>

<template>
  <div class="container">
    <SiteHeader />
    <SideBar />

    <div class="content">
      <RouterView />
    </div>
  </div>
</template>

<style scoped lang="scss">
.content {
  max-width: 1400px;
  margin-left: 250px;
  padding: 30px;
  transition: 0.2s;
  &__full {
    margin-left: 0;
  }
}
</style>
