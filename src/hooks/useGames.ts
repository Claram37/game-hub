import { useEffect, useState } from "react";
import { CanceledError } from "axios";
import apiClient from "../services/api-client";
import type { Genre } from "../hooks/useGenres";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  rating: number;
}
interface FetchGamesResponse {
  count: number;
  results: Game[];
}

const useGames = (
  selectedPlatform: Platform | null,
  selectedGenre: Genre | null,
  sortOrder: string,
) => {
  const platformId = selectedPlatform?.id;
  const genreId = selectedGenre?.id;

  const queryKey = `${platformId ?? ""}|${genreId ?? ""}|${sortOrder}`;

  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState("");
  const [loadedKey, setLoadedKey] = useState<string | null>(null);
  const isLoading = loadedKey !== queryKey;

  useEffect(() => {
    const controller = new AbortController();

    apiClient
      .get<FetchGamesResponse>("/games", {
        signal: controller.signal,
        params: {
          parent_platforms: platformId,
          genres: genreId,
          ordering: sortOrder || undefined,
        },
      })
      .then((res) => {
        setGames(res.data.results);
        setError("");
        setLoadedKey(queryKey);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setGames([]);
        setError(err.message);
        setLoadedKey(queryKey);
      });

    return () => controller.abort();
  }, [platformId, genreId, sortOrder, queryKey]);

  return { games, error, isLoading };
};

export default useGames;
