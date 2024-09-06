<template>
  <MainContainer>
    <button>click</button>
  </MainContainer>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import MainContainer from '../components/MainContainer.vue'
import { get } from '@/api/api';
import { Actions } from '@/ts/enums';
import type { ValueItemRecord } from '@/ts/interfaces';

onMounted( async () => {
  const lol: ValueItemRecord = await get('BTC', 'RUB', Actions.buy)
  console.log(lol.amount)
})

</script>

<style scoped>

</style>
