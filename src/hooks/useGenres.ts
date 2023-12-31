// import { useState, useEffect } from "react";
// import apiClient from "../services/api-client";
// import useData from "./useData";
import genres from "../data/genres";

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

// We don't need to use this interface anymore because of the generic type hook called useData
// We don't need to use this hook anymore because of the generic type hook called useData
/*
interface FetchGenresResponse {
  count: number; // This is the total number of genres
  results: Genre[]; // This stores the genres
}

function useGenres() {
  const [genres, setGenres] = useState<Genre[]>([]);
  const [error, setError] = useState<Error | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();

    async function fetchGames() {
      setIsLoading(true);
      try {
        const response = await apiClient.get<FetchGenresResponse>("genres", {
          signal: controller.signal,
        });
        setGenres(response.data.results);
        setError(null); // Clear any previous errors
        setIsLoading(false); // Turn off loading
      } catch (error) {
        if (error instanceof Error) {
          setError(error); // Only set the error if it's an instance of Error
        } else {
          setError(new Error("An unknown error occurred")); // Otherwise, set a generic error
        }

        setIsLoading(false); // Turn off loading
      } finally {
        setIsLoading(false); // Ensure we always turn off loading, whether there was an error or not
      }
    }

    fetchGames();

    // Cleanup function
    return () => {
      controller.abort(); // Abort the request if the component is unmounted or the effect is re-run
    };
  }, []);

  return { genres, error, isLoading };
}
*/

// This sends a fetch request tp the API each time the app loads even though the data doesn't change
/*
function useGenres() {
  const data = useData<Genre>("genres");

  return data;
}
*/

// This sends a fetch request to the API only when the app loads and the data changes
function useGenres() {
  const data = { data: genres, isLoading: false, error: null }; // The reason we return an object is because we want to minimize the impact of this change on the consumers of this hook.
  return data;
}

export default useGenres;
