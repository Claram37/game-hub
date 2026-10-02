import { useParams } from "react-router-dom";
import useGame from "../hooks/useGame";
import { Spinner } from "react-bootstrap";
import getEnglishDescription from "../services/description";
import ExpandableText from "../components/ExpandableText";
import GameAttributes from "../components/GameAttributes";
import GameTrailer from "../components/GameTrailer";

const GameDetailPage = () => {
  const { slug } = useParams();

  const { data: game, isLoading, error } = useGame(slug!);

  if (isLoading) return <Spinner />;

  if (error || !game) return <p>{error?.message}</p>;

  return (
    <>
      <div className="p-3 mt-3">
        <h1>{game.name}</h1>
        <ExpandableText key={game.slug}>
          {getEnglishDescription(game.description_raw)}
        </ExpandableText>
        <GameAttributes game={game} />
        <GameTrailer gameId={game.id} />
      </div>
    </>
  );
};

export default GameDetailPage;
