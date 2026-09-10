import { Button } from "react-bootstrap";
import genre from "../data/genre";
import noImage from "../assets/no-image-placeholder.webp";
export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

interface Props {
  onSelectGenre: (genres: Genre) => void;
  selectedGenre: Genre | null;
}

const getCroppedImageUrl = (url: string) => {
  if (!url) return noImage; // empty image
  return url;
};

const GenreList = ({ onSelectGenre, selectedGenre }: Props) => {
  return (
    <>
      <h2 className="fs-4 fw-semibold mt-5 mb-3">Genres</h2>
      <ul className="list-unstyled mb-0">
        {genre.map((genre) => (
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
                className={`p-0 text-body text-decoration-none ${genre.id === selectedGenre?.id ? "fw-bold" : "fw-normal"}`}
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
//${genre.id === selectedGenre?.id ? "fw-bold" : "fw-normal"}
