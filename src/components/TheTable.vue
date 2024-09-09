<template>
<div v-if="loading === true">
  <AnimatedPlaceholder borderRadius="30px" height="60px" width="100%"/>
 </div>
 <table class="currency-table" v-else-if="loading === false">
    <tbody>
        <tr v-for="(item, index) in props.currencies" :key="index">
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
            <button class="save-button" @click="action(index)">{{ props.buttonText }}</button>
          </td>
        </tr>
    </tbody>
 </table>
</template>

<script setup lang="ts">
import type { ValueItemRecord } from '@/ts/interfaces';
import { format } from '@/utils/valuteFormatter';
import AnimatedPlaceholder from './AnimatedPlaceholder.vue';

interface Props {
    currencies: ValueItemRecord[] | [],
    loading: boolean,
    buttonText: string,
    color: string,
}
const props = defineProps<Props>()

const emit = defineEmits(['action'])

const action = (index: number) => {
    emit('action', index)
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
  background-color: v-bind(color);
}
</style>