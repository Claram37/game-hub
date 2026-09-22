import GameCard from "./GameCard";
import useGames from "../hooks/useGames";
import GameCardSkeleton from "./GameCardSkeleton";
import type { GameQuery } from "../App";
import React from "react";
import { Spinner } from "react-bootstrap";
import InfiniteScroll from "react-infinite-scroll-component";

interface Props {
  gameQuery: GameQuery;
}

const GameGrid = ({ gameQuery }: Props) => {
  const { data, error, isLoading, fetchNextPage, hasNextPage } =
    useGames(gameQuery);
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8];

  if (error) return <p className="text-danger px-2">{error.message}</p>;

  const fetchedGamesCount =
    data?.pages.reduce((total, page) => total + page.results.length, 0) || 0;

  return (
    <InfiniteScroll
      dataLength={fetchedGamesCount}
      hasMore={!!hasNextPage}
      next={() => fetchNextPage()}
      loader={<Spinner />}
    >
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 g-4 p-2">
        {isLoading &&
          skeletons.map((skeleton) => (
            <div key={skeleton} className="col">
              <GameCardSkeleton />
            </div>
          ))}
        {!isLoading &&
          data?.pages.map((page, index) => (
            <React.Fragment key={index}>
              {page.results.map((game) => (
                <div key={game.id} className="col">
                  <GameCard game={game} />
                </div>
              ))}
            </React.Fragment>
          ))}
      </div>
    </InfiniteScroll>
  );
};

export default GameGrid;

/* {hasNextPage && (
        <Button
          className="my-3 btn btn-secondary m-2"
          onClick={() => fetchNextPage()}
        >
          {isFetchingNextPage ? "Loading..." : "Load More"}
        </Button>
      )} */
