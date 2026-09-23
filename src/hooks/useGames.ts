import { keepPreviousData, useQuery } from "@tanstack/react-query";
import type { GameQuery } from "../App";
import type { Platform } from "./usePlatforms";
import APIClient, { type FetchResponse } from "../services/api-client";
import ms from "ms";

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  rating: number;
}

const apiClient = new APIClient<Game>("/games");

export const PAGE_SIZE = 12;

const useGames = (gameQuery: GameQuery) => {
  return useQuery<FetchResponse<Game>, Error>({
    queryKey: ["games", gameQuery],
    queryFn: () =>
      apiClient.getAll({
        params: {
          genres: gameQuery.genreId,
          parent_platforms: gameQuery.platformId,
          ordering: gameQuery.sortOrder,
          search: gameQuery.searchText,
          page: gameQuery.page,
          page_size: PAGE_SIZE,
        },
      }),
    placeholderData: keepPreviousData,
    staleTime: ms("24h"), // 24 hrs
  });
};

export default useGames;
