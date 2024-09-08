// Навигация
export interface Items {
    name: string,   
    pathName: string
}

// рест апи
export interface ValueItemRecord {
    amount: string,
    base: string,
    currency: string,
}
export interface ValuteItem {
    data: ValueItemRecord
}