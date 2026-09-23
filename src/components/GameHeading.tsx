import type { GameQuery } from "../App";
import useGenre from "../hooks/useGenre";
import usePlatform from "../hooks/usePlatform";

interface Props {
  gameQuery: GameQuery;
}

const GameHeading = ({ gameQuery }: Props) => {
  const genre = useGenre(gameQuery.genreId ?? 0);

  const platform = usePlatform(gameQuery.platformId ?? 0);

  const heading = `${platform?.name || ""} ${genre?.name || ""} Games`;
  return <h1 className="display-5 fw-semibold my-4">{heading}</h1>;
};

export default GameHeading;
