import { Button, Spinner } from "react-bootstrap";
import getCroppedImageUrl from "../services/image-url";
import useGenres from "../hooks/useGenres";
import useGameQueryStore from "../store";

const GenreList = () => {
  const { data, isLoading } = useGenres();
  const selectedGenreId = useGameQueryStore((s) => s.gameQuery.genreId);
  const setSelectedGenreId = useGameQueryStore((s) => s.setGenreId);

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
                onClick={() => setSelectedGenreId(genre.id)}
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
