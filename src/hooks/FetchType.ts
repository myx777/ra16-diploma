import {ProductsType} from "../types/ProductsType.ts";
import {CategoriesType} from "../types/CategoriesType.ts";

export type FetchType = {
    url: string;
    options?: RequestInit;
}

export type FetchStatus = {
    isLoading: boolean;
    data: ProductsType | CategoriesType[] | undefined;
    error: unknown | null; 
}
