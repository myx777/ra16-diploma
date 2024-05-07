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
const useFetch = () => {
  /**
   * State representing the status of the fetch request.
   * @type {Object}
   * @property {boolean} isLoading - Indicates whether the request is currently loading.
   * @property {*} data - The data received from the server.
   * @property {?Error} error - Any error that occurred during the request.
   */

  const [status, setStatus] = useState<FetchStatus>({
    isLoading: true,
    data: [],
    error: null,
  });

  /**
   * Function to execute the fetch request.
   * @param {string} url - The URL to fetch data from.
   * @param {RequestInit} [options] - Additional options for the fetch request.
   * @returns {Promise<void>}
   */
  const fetchNow = async (url: string, options: RequestInit) => {
    setStatus((prevStatus) => ({ ...prevStatus, isLoading: true, error: null }));

    const response = await fetch(url, options);
    try {
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
      setStatus((prevStatus) => ({ ...prevStatus, isLoading: false, error: error }));
    } finally {
      setStatus((prevStatus) => ({ ...prevStatus, isLoading: false }));
    }
  };
  return { ...status, fetchNow };
};

export default useFetch;

/**
 * Type representing the options for the fetch request.
 * @typedef {Object} FetchType,
 * @property {string} url - The URL to fetch data from.
 * @property {RequestInit} [options] - Additional options for the fetch request.
 */
