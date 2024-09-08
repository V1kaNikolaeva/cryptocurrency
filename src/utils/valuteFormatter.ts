const ru = new Intl.NumberFormat('ru-RU', {
    currency: 'RUB',
    maximumFractionDigits: 2,
    minimumFractionDigits: 2,
});
const usd = new Intl.NumberFormat('ru-RU', {
    currency: 'USD',
    maximumFractionDigits: 2,
    minimumFractionDigits: 2,
});
export function ruFormat(value: string) {
    return ru.format(Number(value))
}