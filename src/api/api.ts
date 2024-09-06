import type { Actions } from "@/ts/enums";
import type { ValuteItem, ValueItemRecord } from "@/ts/interfaces";
import axios from "axios";

export async function get(cryptoCurrency: string, currency: string, action: Actions) {
    const path = `https://api.coinbase.com/v2/prices/${cryptoCurrency}-${currency}/${action}`
    const { data }: any = await axios.get(path).then((response: ValuteItem): ValueItemRecord => {
        return response.data
    }).catch((error) => console.log(error))
    return data
}