import type { Genre } from "../hooks/useGenres";
import type { Platform } from "../hooks/usePlatforms";

interface Props {
  selectedPlatform: Platform | null;
  selectedGenre: Genre | null;
}

const GameHeading = ({ selectedPlatform, selectedGenre }: Props) => {
  return (
    <h1 className="display-5 fw-semibold my-4">
      {selectedPlatform?.name} {selectedGenre?.name} Games
    </h1>
  );
};

export default GameHeading;
