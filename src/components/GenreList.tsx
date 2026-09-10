import { Button } from "react-bootstrap";

const GenreList = () => {
  return (
    <>
      <h2 className="fs-4 fw-semibold mt-5 mb-3">Genres</h2>
      <ul className="list-unstyled mb-0">
        <li className="py-2">
          <div className="d-flex align-items-center gap-2">
            <img
              src="https://media.rawg.io/media/games/26d/26d4437715bee60138dab4a7c8c59c92.jpg"
              alt=""
              width={32}
              height={32}
              className="rounded-1 object-fit-cover"
            />
            <Button
              variant="link"
              className="p-0 text-body text-decoration-none fw-medium"
            >
              Action
            </Button>
          </div>
        </li>
      </ul>
    </>
  );
};

export default GenreList;
