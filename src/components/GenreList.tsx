import { Button, Spinner } from "react-bootstrap";
import type { Genre } from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";
import useGenres from "../hooks/useGenres";

interface Props {
  onSelectGenre: (genres: Genre) => void;
  selectedGenreId?: number;
}

const GenreList = ({ onSelectGenre, selectedGenreId }: Props) => {
  const { data, isLoading } = useGenres();

  if (isLoading) return <Spinner />;
  return (
    <>
      <h2 className="fs-4 fw-semibold mt-5 mb-3">Genres</h2>
      <ul className="list-unstyled mb-0">
        {data?.results.map((genre) => (
          <li key={genre.id} className="py-2">
            <div className="d-flex align-items-center gap-2">
              <img
                src={getCroppedImageUrl(genre.image_background)}
                alt=""
                width={32}
                height={32}
                className="rounded-1 object-fit-cover"
              />
              <Button
                variant="link"
                className={`p-0 text-body text-decoration-none ${genre.id === selectedGenreId ? "fw-bold" : "fw-normal"}`}
                onClick={() => onSelectGenre(genre)}
              >
                {genre.name}
              </Button>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};

export default GenreList;
