import { Dropdown } from "react-bootstrap";

const SortSelector = () => {
  return (
    <Dropdown>
      <Dropdown.Toggle variant="subtle">Order by: Relevance</Dropdown.Toggle>
      <Dropdown.Menu>
        <Dropdown.Item eventKey="relevance">Relevance</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default SortSelector;
