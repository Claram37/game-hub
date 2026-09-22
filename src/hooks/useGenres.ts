import { useQuery } from "@tanstack/react-query";
import apiClient, { type FetchResponse } from "../services/api-client";
import genre from "../data/genre";

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

const useGenres = () =>
  useQuery({
    queryKey: ["genres"],
    queryFn: () =>
      apiClient
        .get<FetchResponse<Genre>>("/genres")
        .then((res) => res.data.results),
    staleTime: 24 * 60 * 60 * 1000, // 24 hrs
    initialData: genre,
  });

export default useGenres;
