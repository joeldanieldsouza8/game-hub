// import { useState, useEffect } from "react";
// import apiClient from "../services/api-client";

import { useMemo } from "react";
import { GameQuery } from "../App";
import useData from "./useData";
// import { Genre } from "./useGenres";

export interface Platform {
  id: number;
  name: string;
  slug: string;
  image?: string;
}

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[]; // We only care about the platform property
  metacritic: number;
  rating_top: number;
  rating: number;
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

// function useGames(gameQuery: GameQuery) {
//   let query = "";
//   if (gameQuery.genre && gameQuery.platform) {
//     query = `?genres=${gameQuery.genre.id}&platforms=${gameQuery.platform.id}`;
//   } else if (gameQuery.genre) {
//     query = `?genres=${gameQuery.genre.id}`;
//   } else if (gameQuery.platform) {
//     query = `?platforms=${gameQuery.platform.id}`;
//   } else if (gameQuery.sortOrder) {
//     query = `?ordering=${gameQuery.sortOrder}`;
//   }

//   const endpoint = `games${query}`;
//   const { data, error, isLoading } = useData<Game>(endpoint);

//   return { data, error, isLoading };
// }

function useGames(gameQuery: GameQuery) {
  const requestConfig = useMemo(() => {
    return {
      params: {
        genres: gameQuery.genre?.id,
        platforms: gameQuery.platform?.id,
        ordering: gameQuery.sortOrder,
        search: gameQuery.searchQuery,
      },
    };
  }, [gameQuery]); // Only re-run this effect if the gameQuery changes

  const { data, error, isLoading } = useData<Game>("games", requestConfig);

  return { data, error, isLoading };
}

export default useGames;
