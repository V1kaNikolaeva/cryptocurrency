import type { Actions } from "@/ts/enums";
import type { ValuteItem, ValueItemRecord } from "@/ts/interfaces";
import axios from "axios";

export async function get(cryptoCurrency: string, currency: string, action: Actions): Promise<ValueItemRecord> {
    const path = `https://api.coinbase.com/v2/prices/${cryptoCurrency}-${currency}/${action}`
    // ????
    const { data }: any = await axios
        .get<ValueItemRecord>(path)
        .then((response: ValuteItem): ValueItemRecord => {
            return response.data
    }).catch(function() {
        return {
            amount: '',
            base: '',
            currency: '',
        }
    })

    return data
}