import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

interface FetchGenreResponse {
  count: number;
  results: Genre[];
}

const useGenres = () => {
  const queryKey = "genres";
  const [genres, setGenres] = useState<Genre[]>([]);
  const [error, setError] = useState("");
  const [loadedKey, setLoadedKey] = useState<string | null>(null);
  const isLoading = loadedKey !== queryKey;

  useEffect(() => {
    const controller = new AbortController();

    apiClient
      .get<FetchGenreResponse>("/genres", {
        signal: controller.signal,
      })
      .then((res) => {
        setGenres(res.data.results);
        setError("");
        setLoadedKey(queryKey);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setGenres([]);
        setError(err.message);
        setLoadedKey(queryKey);
      });

    return () => controller.abort();
  }, []);

  return { genres, error, isLoading };
};

export default useGenres;
