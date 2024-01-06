// import { useState, useEffect } from "react";
// import apiClient from "../services/api-client";

import useData from "./useData";

export interface Platform {
  id: number;
  name: string;
  slug: string;
  image: string;
}

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[]; // We only care about the platform property
  metacritic: number;
}

/*
interface FetchGamesResponse {
  count: number;
  results: Game[];
}

function useGames() {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState<Error | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();

    async function fetchGames() {
      setIsLoading(true);
      try {
        const response = await apiClient.get<FetchGamesResponse>("games", {
          signal: controller.signal,
        });
        setGames(response.data.results);
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

  return { games, error, isLoading };
}
*/

function useGames() {
  const data = useData<Game>("games");

  return data;
}

export default useGames;
