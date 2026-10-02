import { useQuery } from "@tanstack/react-query";
import type Trailer from "../entities/Trailer";
import APIClient from "../services/api-client";
import ms from "ms";

const useTrailers = (gameId: number) => {
  const apiClient = new APIClient<Trailer>(`/games/${gameId}/movies`);

  return useQuery({
    queryKey: ["trailers", gameId],
    queryFn: apiClient.getAll,
    staleTime: ms("24h"), // 24 hrs
  });
};

export default useTrailers;
