import type { ValueItemRecord } from "@/ts/interfaces";
import { defineStore } from "pinia";


export const useCurrenciesStore = defineStore('currencies', {
    state: (): ValueItemRecord[] => {
        return []
    },
})