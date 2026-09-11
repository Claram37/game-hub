import GameCard from "./GameCard";
import results from "../data/games";

const GameGrid = () => {
  const games = results.flatMap((result) => result.results); // map the results array to initialize the games

  return (
    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 g-4 p-2">
      {games.map((game) => (
        <div key={game.id} className="col">
          <GameCard game={game} />
        </div>
      ))}
    </div>
  );
};

export default GameGrid;
