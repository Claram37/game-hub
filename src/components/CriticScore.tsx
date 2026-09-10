import { Badge } from "react-bootstrap";

// interface Props {
//   score: number;
// }

const CriticScore = () => {
  // const tone =
  //   score > 75 ? "success" : score > 60 ? "warning" : "secondary";

  // Note: Bootstrap hides empty badges (.badge:empty { display: none }),
  // so nothing is visible here until a score is rendered inside it.
  return (
    <Badge
      bg="success-subtle"
      text="success-emphasis"
      //bg={`${tone}-subtle`} text={`${tone}-emphasis`}
      className="fs-6 fw-medium px-2 rounded-1"
    ></Badge>
  );
};

export default CriticScore;
