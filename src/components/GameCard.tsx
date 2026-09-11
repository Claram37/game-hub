import { Card } from "react-bootstrap";
import noImage from "../assets/no-image-placeholder.webp";

// import { Game } from '../hooks/useGames'

import CriticScore from "./CriticScore";
import type { Platform } from "./PlatformSelector";
import PlatformIconList from "./PlatformIconList";
export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  rating: number;
}
interface Props {
  game: Game;
}

const getCroppedImageUrl = (url: string) => {
  if (!url) return noImage; // empty image

  const target = "media/";
  const index = url.indexOf(target) + target.length;
  return url.slice(0, index) + "crop/600/400/" + url.slice(index);
};

const GameCard = ({ game }: Props) => {
  return (
    <Card className="overflow-hidden h-100">
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
    </Card>
  );
};

export default GameCard;
