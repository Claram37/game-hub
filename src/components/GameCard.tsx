import { Card, CardBody, Heading, HStack, Image } from "@chakra-ui/react";
// import { Game } from '../hooks/useGames'

import CriticScore from "./CriticScore";

// interface Props {
//   game: Game
// }

const GameCard = () => {
  return (
    <Card.Root>
      <Image src="https://media.rawg.io/media/games/26d/26d4437715bee60138dab4a7c8c59c92.jpg" />
      <CardBody>
        <HStack justifyContent="space-between" marginBottom={3}>
          <CriticScore />
        </HStack>
        <Heading fontSize="2xl">Game name</Heading>
      </CardBody>
    </Card.Root>
  );
};

export default GameCard;
