import { CategoriesType } from "../types/CategoriesType";
import { ProductsType } from "../types/ProductsType";

export type FetchType = {
    url: string;
    options?: RequestInit;
}

export type FetchStatus = {
    isLoading: boolean;
    data: CategoriesType[] | ProductsType[] | undefined;
    error: unknown | null; 
}