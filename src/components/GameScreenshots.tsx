import useScreenshots from "../hooks/useScreenshots";

interface Props {
  gameId: number;
}

const GameScreenshots = ({ gameId }: Props) => {
  const { data, isLoading, error } = useScreenshots(gameId);

  if (isLoading) return null;

  if (error) return null;

  if (!data?.results.length) return null;

  return (
    <div className="row row-cols-2 g-4">
      {data.results.map((file) => (
        <div key={file.id} className="col">
          <img
            src={file.image}
            width={file.width}
            height={file.height}
            alt=""
            className="img-fluid rounded"
          />
        </div>
      ))}
    </div>
  );
};

export default GameScreenshots;
