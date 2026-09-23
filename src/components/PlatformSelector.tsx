import { Dropdown } from "react-bootstrap";
import type { Platform } from "../hooks/usePlatforms";
import usePlatforms from "../hooks/usePlatforms";

interface Props {
  onSelectPlatform: (platform: Platform) => void;
  selectedPlatformId?: number;
}

const PlatformSelector = ({ onSelectPlatform, selectedPlatformId }: Props) => {
  const { data, error } = usePlatforms();
  const selectedPlatform = data.results.find(
    (p) => p.id === selectedPlatformId,
  );

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
            onClick={() => onSelectPlatform(platform)}
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
