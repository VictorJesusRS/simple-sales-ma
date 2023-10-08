export interface Product {
    id: string,
    name: string,
    description: string,
    price: string | number,
}

export type  ProductStoreDTO = Omit<Product, "id">