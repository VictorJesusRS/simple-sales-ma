export interface Exchange {
    id: string,
    currency: string,
    value: number,
}

export type  ExchangeStoreDTO = Omit<Exchange, "id">