import { Button, Heading, HStack, Image, List } from "@chakra-ui/react";

const GenreList = () => {
  return (
    <>
      <Heading fontSize="2xl" marginTop={9} marginBottom={3}>
        Genres
      </Heading>
      <List.Root style={{ listStyleType: "none" }}>
        <List.Item paddingY="8px">
          <HStack>
            <Image
              boxSize="32px"
              borderRadius="4px"
              objectFit="cover"
              src="https://media.rawg.io/media/games/26d/26d4437715bee60138dab4a7c8c59c92.jpg"
            />
            <Button variant="plain" textAlign="left" fontSize="md">
              Action
            </Button>
          </HStack>
        </List.Item>
      </List.Root>
    </>
  );
};

export default GenreList;
