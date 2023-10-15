export interface Category {
    id: string,
    name: string,
    description: string,
}

export type  CategoryStoreDTO = Omit<Category, "id">