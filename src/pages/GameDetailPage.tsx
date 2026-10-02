import { useParams } from "react-router-dom";
import useGame from "../hooks/useGame";
import { Spinner } from "react-bootstrap";
import getEnglishDescription from "../services/description";

const GameDetailPage = () => {
  const { slug } = useParams();

  const { data: game, isLoading, error } = useGame(slug!);

  if (isLoading) return <Spinner />;

  if (error || !game) return <p>{error?.message}</p>;

  return (
    <>
      <div className="mt-3">
        <h1>{game.name}</h1>
        <p>{getEnglishDescription(game.description_raw)}</p>
      </div>
    </>
  );
};

export default GameDetailPage;
