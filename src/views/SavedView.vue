
<template>
    <MainContainer>
        <TheTable @action="deleteRecord" color="rgb(172, 56, 56)" buttonText="delete" :currencies="currenciesStore.$state" :loading="loading"/>
    </MainContainer>
</template>

<script setup lang="ts">
import { useCurrenciesStore } from '@/stores/savedCurrencies';
import MainContainer from '../components/MainContainer.vue'
import TheTable from '@/components/TheTable.vue';
import { ref, type Ref } from 'vue';

const currenciesStore = useCurrenciesStore()
const loading: Ref<boolean> = ref(false)
const deleteRecord = (index: number) => {
    currenciesStore.$state.splice(index, 1)
}
</script>

<style scoped>

</style>