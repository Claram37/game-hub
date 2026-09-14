import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    // Read from .env (VITE_ prefix is required for Vite to expose it to the browser)
    key: import.meta.env.VITE_RAWG_API_KEY,
  },
});
