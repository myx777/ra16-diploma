import { useState } from "react";
import { FetchStatus } from "./FetchType";

/**
 * Custom hook for making network requests using the fetch API.
 * @returns {{
 *   isLoading: boolean, 
 *   data: any, 
 *   error: Error | null, 
 *   fetchNow: (url: string, options?: RequestInit): Promise<void>
 * }} An object containing the current status of the request and a function to execute the request.
 */
const useFetch = <T>() => {
  const [status, setStatus] = useState<FetchStatus<T>>({
    isLoading: true,
    data: undefined,
    error: null,
  });

  const fetchNow = async (url: string, options?: RequestInit) => {
    setStatus((prevStatus) => ({ ...prevStatus, isLoading: true, error: null }));

    try {
      const response = await fetch(url, options);

      if (!response.ok) {
        throw new Error(`${response.status} ${response.statusText}`);
      }

      const result = response.status === 204 ? null : await response.json();
      setStatus((prevStatus) => ({
        ...prevStatus,
        isLoading: false,
        data: result,
        error: null,
      }));
    } catch (error) {
      setStatus((prevStatus) => ({ ...prevStatus, isLoading: false, error: error as Error }));
    } finally {
      setStatus((prevStatus) => ({ ...prevStatus, isLoading: false }));
    }
  };

  return { ...status, fetchNow };
};

export default useFetch;
