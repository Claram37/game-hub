import GameCard from "./GameCard";
import results from "../data/games";
import type { Genre } from "./GenreList";
import type { Platform } from "./PlatformSelector";

interface Props {
  selectedPlatform: Platform | null;
  selectedGenre: Genre | null;
}
// some() walks through the selected platform or genre and returns true if any entry has that ID
const GameGrid = ({ selectedPlatform, selectedGenre }: Props) => {
  const games = results.flatMap((result) => result.results); // map the results array to initialize the games
  const visibleGames = games.filter(
    (game) =>
      (!selectedPlatform ||
        game.parent_platforms.some(
          (p) => p.platform.id === selectedPlatform.id,
        )) &&
      (!selectedGenre || game.genres.some((g) => g.id === selectedGenre.id)),
  );

  return (
    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 g-4 p-2">
      {visibleGames.map((game) => (
        <div key={game.id} className="col">
          <GameCard game={game} />
        </div>
      ))}
    </div>
  );
};

export default GameGrid;
