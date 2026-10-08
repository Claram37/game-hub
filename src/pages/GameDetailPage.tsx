import { useParams } from "react-router-dom";
import useGame from "../hooks/useGame";
import { Spinner } from "react-bootstrap";
import getEnglishDescription from "../services/description";
import ExpandableText from "../components/ExpandableText";
import GameAttributes from "../components/GameAttributes";
import GameTrailer from "../components/GameTrailer";
import GameScreenshots from "../components/GameScreenshots";

const GameDetailPage = () => {
  const { slug } = useParams();

  const { data: game, isLoading, error } = useGame(slug!);

  if (isLoading) return <Spinner />;

  if (error || !game) return <p>{error?.message}</p>;

  return (
    <>
      <div className="row row-cols-1 row-cols-md-2 g-4 p-3 mt-3">
        <div className="col">
          <h1>{game.name}</h1>
          <ExpandableText key={game.slug}>
            {getEnglishDescription(game.description_raw)}
          </ExpandableText>
          <GameAttributes game={game} />
        </div>
        <div className="col">
          <GameTrailer gameId={game.id} />
          <GameScreenshots gameId={game.id} />
        </div>
      </div>
    </>
  );
};

export default GameDetailPage;
