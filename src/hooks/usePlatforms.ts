import { useQuery } from "@tanstack/react-query";
import platform from "../data/platform";
import apiClient, { type FetchResponse } from "../services/api-client";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}
const usePlatforms = () =>
  useQuery({
    queryKey: ["platforms"],
    queryFn: () =>
      apiClient
        .get<FetchResponse<Platform>>("/platforms/lists/parents")
        .then((res) => res.data.results),
    staleTime: 24 * 60 * 60 * 1000, // 24 hrs
    initialData: platform,
  });
export default usePlatforms;
