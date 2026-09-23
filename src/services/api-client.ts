import axios, { type AxiosRequestConfig } from "axios";
export interface FetchResponse<T> {
  next: string | null;
  count: number;
  results: T[];
  previous: string | null;
}

const axiosInstance = axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    // Read from .env (VITE_ prefix is required for Vite to expose it to the browser)
    key: import.meta.env.VITE_RAWG_API_KEY,
  },
});

class APIClient<T> {
  endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  getAll = (config?: AxiosRequestConfig) => {
    return axiosInstance
      .get<FetchResponse<T>>(this.endpoint, config)
      .then((res) => res.data);
  };
}

export default APIClient;
