import { useState, useEffect } from "react";
import apiClient from "../services/api-client";

interface FetchResponse<T> {
  count: number; // This is the total number of genres
  results: T[]; // This stores the genres
}

function useData<T>(endpoint: string) {
  const [data, setData] = useState<T[]>([]);
  const [error, setError] = useState<Error | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();

    async function fetchData() {
      setIsLoading(true);
      console.log("Starting data fetch for:", endpoint); // Log when fetch starts
      try {
        const response = await apiClient.get<FetchResponse<T>>(endpoint, {
          signal: controller.signal,
        });
        console.log("Data fetched successfully for:", endpoint); // Log successful fetch
        setData(response.data.results);
        setError(null);
        setIsLoading(false);
      } catch (error) {
        console.log("Fetch error for:", endpoint, error); // Log any errors
        if (error instanceof Error && error.name !== "AbortError") {
          setError(error);
        } else {
          console.log("Fetch was aborted for:", endpoint); // Log specifically for abort
        }
        setIsLoading(false);
      } 
    }

    fetchData();

    // Cleanup function
    return () => {
      console.log("Cleanup called for:", endpoint); // Log when cleanup is called
      controller.abort();
    };
  }, [endpoint]);

  return { data, error, isLoading };
}

export default useData;
