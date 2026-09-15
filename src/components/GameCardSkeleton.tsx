import { Card, Placeholder } from "react-bootstrap";

const GameCardSkeleton = () => {
  return (
    <Card className="overflow-hidden h-100 placeholder-glow">
      <div className="ratio ratio-3x2">
        <div className="placeholder" />
      </div>
      <Card.Body className="p-4">
        <div className="d-flex align-items-center justify-content-between mb-3">
          <Placeholder xs={4} />
          <Placeholder xs={2} />
        </div>
        <Card.Title as="h2" className="fs-5 fw-semibold mb-0">
          <Placeholder xs={8} />
        </Card.Title>
      </Card.Body>
    </Card>
  );
};

export default GameCardSkeleton;
