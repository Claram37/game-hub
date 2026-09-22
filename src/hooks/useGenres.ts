import { useQuery } from "@tanstack/react-query";
import genre from "../data/genre";
import APIClient from "../services/api-client";

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}
const apiClient = new APIClient<Genre>("/genres");

const useGenres = () =>
  useQuery({
    queryKey: ["genres"],
    queryFn: apiClient.getAll,
    staleTime: 24 * 60 * 60 * 1000, // 24 hrs
    initialData: { count: genre.length, next: null, results: genre },
  });

export default useGenres;

//queryFn: () => apiClient.getAll().then((response) => response.results),
