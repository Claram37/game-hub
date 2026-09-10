import GameCard from "./GameCard";

const GameGrid = () => {
  return (
    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 g-4 p-2">
      <div className="col">
        <GameCard />
      </div>
    </div>
  );
};

export default GameGrid;
