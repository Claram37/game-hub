import { Dropdown } from "react-bootstrap";
import type { Platform } from "../hooks/usePlatforms";
import usePlatforms from "../hooks/usePlatforms";

interface Props {
  onSelectPlatform: (platform: Platform) => void;
  selectedPlatform: Platform | null;
}

const PlatformSelector = ({ onSelectPlatform, selectedPlatform }: Props) => {
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
