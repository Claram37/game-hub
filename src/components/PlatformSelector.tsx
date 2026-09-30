import { Dropdown } from "react-bootstrap";
import usePlatforms from "../hooks/usePlatforms";
import usePlatform from "../hooks/usePlatform";
import useGameQueryStore from "../store";

const PlatformSelector = () => {
  const selectedPlatformId = useGameQueryStore((s) => s.gameQuery.platformId);
  const selectedPlatform = usePlatform(selectedPlatformId ?? 0);

  const setSelectedPlatformId = useGameQueryStore((s) => s.setPlatformId);

  const { data, error } = usePlatforms();

  if (error) return null;

  return (
    <Dropdown>
      <Dropdown.Toggle variant="subtle">
        {" "}
        {selectedPlatform?.name || "Platforms"}
      </Dropdown.Toggle>
      <Dropdown.Menu>
        {data?.results.map((platform) => (
          <Dropdown.Item
            onClick={() => setSelectedPlatformId(platform.id)}
            key={platform.id}
          >
            {platform.name}
          </Dropdown.Item>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default PlatformSelector;
