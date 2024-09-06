// Навигация
export interface Items {
    name: string,   
    pathName: string
}

// рест апи
export interface ValuteItem {
    data: {
        amount: number,
        base: string,
        currency: string,
    }
}
export interface ValueItemRecord {
    amount: number,
    base: string,
    currency: string,
}