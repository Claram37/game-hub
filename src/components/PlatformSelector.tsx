import { Dropdown } from "react-bootstrap";
import platforms from "../data/platform";
import type { Platform } from "../hooks/useGames";

interface Props {
  onSelectPlatform: (platform: Platform) => void;
  selectedPlatform: Platform | null;
}

const PlatformSelector = ({ onSelectPlatform, selectedPlatform }: Props) => {
  return (
    <Dropdown>
      <Dropdown.Toggle variant="subtle">
        {" "}
        {selectedPlatform?.name || "Platforms"}
      </Dropdown.Toggle>
      <Dropdown.Menu>
        {platforms.map((platform) => (
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
