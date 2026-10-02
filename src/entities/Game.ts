import type Genre from "./Genre";
import type Platform from "./Platform";
import type Publisher from "./Publisher";

export default interface Game {
  id: number;
  name: string;
  slug: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  rating: number;
  genres: Genre[];
  publishers: Publisher[];
  description_raw: string;
  rating_top: number;
}
