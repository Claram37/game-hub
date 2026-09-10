import { Dropdown } from "react-bootstrap";

const PlatformSelector = () => {
  return (
    <Dropdown>
      <Dropdown.Toggle variant="subtle">PlayStation</Dropdown.Toggle>
      <Dropdown.Menu>
        <Dropdown.Item eventKey="playstation">PlayStation</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default PlatformSelector;
