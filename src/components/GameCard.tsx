import { Card } from "react-bootstrap";
import noImage from "../assets/no-image-placeholder.webp";

// import { Game } from '../hooks/useGames'

import CriticScore from "./CriticScore";
import type { Platform } from "./PlatformSelector";
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
  return url;
};

const GameCard = ({ game }: Props) => {
  return (
    <Card className="overflow-hidden">
      <Card.Img variant="top" src={getCroppedImageUrl(game.background_image)} />
      <Card.Body className="p-4">
        <div className="d-flex align-items-center justify-content-between mb-3">
          <CriticScore />
        </div>
        <Card.Title as="h2" className="fs-4 fw-semibold mb-0">
          {game.name}
        </Card.Title>
      </Card.Body>
    </Card>
  );
};

export default GameCard;
