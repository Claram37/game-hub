import { Link } from "react-router-dom";
import logo from "../assets/logo.webp";
import SearchInput from "./SearchInput";
import ColorModeSwitch from "./ColorModeSwitch";

const NavBar = () => {
  return (
    <nav className="d-flex align-items-center gap-2">
      <Link to="/">
        <img src={logo} alt="Game Hub" width={60} height={60} />
      </Link>
      <SearchInput />
      <ColorModeSwitch />
    </nav>
  );
};

export default NavBar;
