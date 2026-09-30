import useGenre from "../hooks/useGenre";
import usePlatform from "../hooks/usePlatform";
import useGameQueryStore from "../store";

const GameHeading = () => {
  const genreId = useGameQueryStore((s) => s.gameQuery.genreId);
  const genre = useGenre(genreId ?? 0);

  const platformId = useGameQueryStore((s) => s.gameQuery.platformId);
  const platform = usePlatform(platformId ?? 0);

  const heading = `${platform?.name || ""} ${genre?.name || ""} Games`;
  return <h1 className="display-5 fw-semibold my-4">{heading}</h1>;
};

export default GameHeading;
