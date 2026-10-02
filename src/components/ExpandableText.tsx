import { useState } from "react";
import { Button } from "react-bootstrap";

interface Props {
  children: string;
}
const ExpandableText = ({ children }: Props) => {
  const [expanded, setExpanded] = useState(false);
  const limit = 300;

  if (!children) return null;

  if (children.length <= limit) return <p className="fs-6">{children}</p>;

  const summary = expanded ? children : children.substring(0, limit) + "...";
  return (
    <p className="fs-6">
      {summary}
      <Button
        variant="subtle"
        size="sm"
        className="fw-bold m-1"
        onClick={() => setExpanded(!expanded)}
      >
        {expanded ? "Show less" : "Read more"}
      </Button>
    </p>
  );
};

export default ExpandableText;
