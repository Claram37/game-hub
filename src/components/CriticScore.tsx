import { Badge } from "react-bootstrap";

interface Props {
  score: number;
}

const CriticScore = ({ score }: Props) => {
  const tone = score > 80 ? "success" : score > 60 ? "warning" : "secondary";

  return (
    <Badge
      bg={`${tone}-subtle`}
      text={`${tone}-emphasis`}
      className="fs-6 fw-medium px-2 rounded-1"
    >
      {score}
    </Badge>
  );
};

export default CriticScore;
