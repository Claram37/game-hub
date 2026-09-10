import { Form } from "react-bootstrap";

import { useEffect, useState } from "react";

const ColorModeSwitch = () => {
  // Initialize the default state to be light mode
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || "light";
  });

  // Apply the theme to the HTML tag when the state changes
  useEffect(() => {
    document.documentElement.setAttribute("data-bs-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  // Handle the toggling logic on click
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <>
      <Form.Check
        type="switch"
        id="color-mode-switch"
        label="Dark Mode"
        onClick={toggleTheme}
        style={{ fontSize: "14px" }}
        checked={theme === "dark"}
      />
    </>
  );
};

export default ColorModeSwitch;
