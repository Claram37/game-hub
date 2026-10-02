import { Card } from "react-bootstrap";
import CriticScore from "./CriticScore";
import PlatformIconList from "./PlatformIconList";
import getCroppedImageUrl from "../services/image-url";
import { Link } from "react-router-dom";
import type Game from "../entities/Game";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card className="game-card overflow-hidden h-100 ">
      <Link to={"/games/" + game.slug} className="text-decoration-none">
        <Card.Img
          className="card-img-top"
          src={getCroppedImageUrl(game.background_image)}
        />
        <Card.Body className="p-4">
          <div className="d-flex align-items-center justify-content-between mb-3">
            <PlatformIconList
              platforms={game.parent_platforms?.map((p) => p.platform)}
            />
            <CriticScore score={game.metacritic} />
          </div>
          <Card.Title as="h2" className="fs-5 fw-semibold mb-0">
            {game.name}
          </Card.Title>
        </Card.Body>
      </Link>
    </Card>
  );
};

export default GameCard;
