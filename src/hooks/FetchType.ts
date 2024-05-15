export type FetchStatus<T> = {
    isLoading: boolean;
    data: T | undefined;
    error: Error | null;
}
