import { Badge } from "@chakra-ui/react";

// interface Props {
//   score: number;
// }

const CriticScore = () => {
  // const color = score > 75 ? "green" : score > 60 ? "yellow" : "";

  return (
    <Badge
      //colorScheme={color}
      fontSize="14px"
      paddingX={2}
      borderRadius="4px"
    ></Badge>
  );
};

export default CriticScore;
