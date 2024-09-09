export function format(format: string, value: string, currency: string) {
    const fotmatType = new Intl.NumberFormat(format, {
        currency: currency,
        maximumFractionDigits: 2,
        minimumFractionDigits: 2,
    });
    return fotmatType.format(Number(value))
}