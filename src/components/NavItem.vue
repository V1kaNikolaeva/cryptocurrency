<template>
  <li class="nav-item">
    <RouterLink :to="{ name: item.pathName }">{{ props.item.name }}</RouterLink>
  </li>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router' 
interface Props {
  item: {
    name: string,
    pathName: string
  },
}
const props = defineProps<Props>()
</script>

<style scoped>
.nav-item {
  margin-left: 42px;
}
.nav-item:first-child {
  margin-left: 0px;
}
.nav-item {
  border-bottom: 2px solid var(--border);
  transition: border .3s;
}
.nav-item:hover {
  border-bottom: 2px solid var(--main-color);
}
</style>
