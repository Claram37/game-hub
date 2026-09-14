import { Card, Placeholder } from "react-bootstrap";

// Mirrors GameCard's structure so the grid doesn't jump when real data lands.
// placeholder-glow on the Card animates every .placeholder beneath it,
// including the image block, which sits outside Card.Body.
const GameCardSkeleton = () => {
  return (
    <Card className="overflow-hidden h-100 placeholder-glow">
      {/* Same 3:2 shape as the cropped 600x400 images (ratio-3x2 is defined in index.css) */}
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
