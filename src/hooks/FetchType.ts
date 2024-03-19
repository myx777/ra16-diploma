
export type FetchType = {
    url: string;
    options?: RequestInit;
}

export type FetchStatus = {
    isLoading: boolean;
    data: [] | undefined;
    error: unknown | null; 
}