import { Form } from "react-bootstrap";

const ColorModeSwitch = () => {
  return (
    <Form.Check
      type="switch"
      id="color-mode-switch"
      label="Dark Mode"
      className="text-nowrap"
    />
  );
};

export default ColorModeSwitch;
