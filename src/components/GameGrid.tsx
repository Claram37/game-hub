import GameCard from "./GameCard";
import useGames from "../hooks/useGames";
import GameCardSkeleton from "./GameCardSkeleton";
import { Button } from "react-bootstrap";
import useGameQueryStore from "../store";

const GameGrid = () => {
  const page = useGameQueryStore((s) => s.gameQuery.page);
  const setPage = useGameQueryStore((s) => s.setPage);

  const { data, error, isLoading, isPlaceholderData } = useGames();
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8];

  if (error) return <p className="text-danger px-2">{error.message}</p>;

  const hasPrevious = page > 1;
  const hasNext = !!data?.next;

  const changePage = (newPage: number) => {
    setPage(newPage);
    window.scrollTo({ top: 0 });
  };

  return (
    <>
      <div
        className="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 g-4 p-2"
        style={{ opacity: isPlaceholderData ? 0.5 : 1 }}
      >
        {isLoading &&
          skeletons.map((skeleton) => (
            <div key={skeleton} className="col">
              <GameCardSkeleton />
            </div>
          ))}
        {data?.results.map((game) => (
          <div key={game.id} className="col">
            <GameCard game={game} />
          </div>
        ))}
      </div>
      {data && (
        <div className="d-flex align-items-center gap-3 p-2 my-3">
          <Button
            variant="secondary"
            disabled={!hasPrevious || isPlaceholderData}
            onClick={() => changePage(page - 1)}
          >
            Previous
          </Button>
          <span>Page {page}</span>
          <Button
            className="btn btn-primary"
            variant="primary"
            disabled={!hasNext || isPlaceholderData}
            onClick={() => changePage(page + 1)}
          >
            Next
          </Button>
        </div>
      )}
    </>
  );
};

export default GameGrid;
