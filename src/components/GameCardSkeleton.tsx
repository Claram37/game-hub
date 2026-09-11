import { Card } from "react-bootstrap";

const GameCardSkeleton = () => {
  return (
    <Card className="overflow-hidden">
      <Card.Img className="card-img-top" />
      <Card.Body className="p-4">
        <div className="d-flex align-items-center justify-content-between mb-3">
          <div className="placeholder col-3" />
        </div>
        <Card.Title
          as="h2"
          className="fs-4 fw-semibold mb-0 placeholder-glow"
        ></Card.Title>
      </Card.Body>
    </Card>
  );
};

export default GameCardSkeleton;
