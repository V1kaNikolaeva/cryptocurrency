
<template >
  <div class="wrapper" :data-theme="theme.theme">

    <header class="main-header">
      <NavBar/>
    </header>
    <div class="main-wrapper">
      <RouterView />
    </div>
  </div>
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router'
import NavBar from './components/NavBar.vue'
import { useThemeStore } from './stores/theme';
import { watchEffect } from 'vue';

const theme = useThemeStore()
watchEffect(() => {
  document.body.setAttribute('data-theme', theme.theme)
})

</script>

<style scoped>
.main-header {
  width: 100%;

}
.wrapper {
  width: 100%;
  height: 100%;
  background-color: var(--bg);
}
.main-wrapper {
  margin: 0 auto;
  max-width: 1400px;
  padding-top: 200px;
}
</style>
