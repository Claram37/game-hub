import GameCard from "./GameCard";
import useGames from "../hooks/useGames";
import GameCardSkeleton from "./GameCardSkeleton";
import type { GameQuery } from "../App";

interface Props {
  gameQuery: GameQuery;
}

const GameGrid = ({ gameQuery }: Props) => {
  const { data, error, isLoading } = useGames(gameQuery);
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8];

  if (error) return <p className="text-danger px-2">{error.message}</p>;

  return (
    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 g-4 p-2">
      {isLoading &&
        skeletons.map((skeleton) => (
          <div key={skeleton} className="col">
            <GameCardSkeleton />
          </div>
        ))}
      {!isLoading &&
        data?.results.map((game) => (
          <div key={game.id} className="col">
            <GameCard game={game} />
          </div>
        ))}
    </div>
  );
};

export default GameGrid;
