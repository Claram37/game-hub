import { keepPreviousData, useQuery } from "@tanstack/react-query";
import APIClient, { type FetchResponse } from "../services/api-client";
import ms from "ms";
import useGameQueryStore from "../store";
import type { Game } from "../entities/Game";

const apiClient = new APIClient<Game>("/games");

export const PAGE_SIZE = 12;

const useGames = () => {
  const gameQuery = useGameQueryStore((s) => s.gameQuery);

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
