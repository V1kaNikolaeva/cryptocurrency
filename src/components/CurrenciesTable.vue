<template>
 <p v-if="loading === true">LOX</p>
 <table class="currency-table" v-else-if="loading === false">
    <tbody>
        <tr v-for="(item, index) in currencies" :key="index">
          <th>
            {{ item.base }}
          </th>
          <td>
            {{ ruFormat(item.amount) }}
          </td>
          <td>
            {{ item.currency }}
          </td>
        </tr>
    </tbody>
 </table>
</template>

<script setup lang="ts">
import { get } from '@/api/api';
import { Actions } from '@/ts/enums';
import type { ValueItemRecord } from '@/ts/interfaces';
import { ruFormat } from '@/utils/valuteFormatter';
import { onMounted, ref, type Ref } from 'vue';

let currencies: ValueItemRecord[] = [];
const loading: Ref = ref(true);
onMounted(async () => {
  const BTCData: ValueItemRecord = await get('BTC', 'RUB', Actions.buy)
  const ETHData: ValueItemRecord = await get('ETH', 'RUB', Actions.buy)
  const USDTData: ValueItemRecord = await get('USDT', 'RUB', Actions.buy)
  currencies = new Array(BTCData, ETHData, USDTData)
  loading.value = false
})

</script>

<style scoped>
.currency-table {
    width: 100%;
    border-spacing: 10px;
}
</style>