import { Card } from "react-bootstrap";
// import { Game } from '../hooks/useGames'

import CriticScore from "./CriticScore";

// interface Props {
//   game: Game
// }

const GameCard = () => {
  return (
    <Card className="overflow-hidden">
      <Card.Img
        variant="top"
        src="https://media.rawg.io/media/games/26d/26d4437715bee60138dab4a7c8c59c92.jpg"
      />
      <Card.Body className="p-4">
        <div className="d-flex align-items-center justify-content-between mb-3">
          <CriticScore />
        </div>
        <Card.Title as="h2" className="fs-4 fw-semibold mb-0">
          Game name
        </Card.Title>
      </Card.Body>
    </Card>
  );
};

export default GameCard;
