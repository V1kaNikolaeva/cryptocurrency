<template>
  <div class="reload">
    <button @click="getData" class="reload-button">
      Update
    </button>
  </div>
  <TheTable :currencies="currencies" :loading="loading" color="rgb(114, 179, 114)" buttonText="save" @action="save"/>
 <!-- <div v-if="loading === true">
  <AnimatedPlaceholder borderRadius="30px" height="60px" width="100%"/>
 </div>
 <table class="currency-table" v-else-if="loading === false">
    <tbody>
        <tr v-for="(item, index) in currencies" :key="index">
          <th>
            {{ item.base }}
          </th>
          <td>
            {{ format('ru-RU', item.amount, 'RUB') }}
          </td>
          <td>
            {{ item.currency }}
          </td>
          <td>
            <button class="save-button" @click="save(index)">save</button>
          </td>
        </tr>
    </tbody>
 </table> -->
</template>

<script setup lang="ts">
import { get } from '@/api/api';
import { Actions } from '@/ts/enums';
import type { ValueItemRecord } from '@/ts/interfaces';
import { format } from '@/utils/valuteFormatter';
import { onMounted, ref, type Ref } from 'vue';
import AnimatedPlaceholder from './AnimatedPlaceholder.vue';
import { useCurrenciesStore } from '@/stores/savedCurrencies';
import TheTable from './TheTable.vue';

const currenciesStore = useCurrenciesStore()

let currencies: Ref<ValueItemRecord[]> = ref([]);
const loading: Ref = ref(false);
onMounted(() => {
  getData()
})

const getData = async () => {
  loading.value = true
  const BTCData: ValueItemRecord = await get('BTC', 'RUB', Actions.buy)
  const ETHData: ValueItemRecord = await get('ETH', 'RUB', Actions.buy)
  const USDTData: ValueItemRecord = await get('USDT', 'RUB', Actions.buy)
  currencies.value = new Array(BTCData, ETHData, USDTData)
  loading.value = false
}

const save = async (index: number) => {
  const current = currencies.value[index]
  const updated: ValueItemRecord = await get(current.base, current.currency, Actions.buy)
  currenciesStore.$state.push(updated)
}

</script>

<style scoped>
.currency-table {
  width: 100%;
  border-spacing: 10px;
}
.reload {
  display: flex;
  justify-content: center;
  padding-bottom: 30px;
}
.reload-button {
  padding: 10px;
}
.save-button {
  width: 100%;
  height: 100%;
  text-align: center;
}
.save-button:hover {
  background-color: var(--hover);
}
.reload-button:hover {
  background-color: var(--hover-update);
}
</style>