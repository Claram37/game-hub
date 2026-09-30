import logo from "../assets/logo.webp";
import SearchInput from "./SearchInput";
import ColorModeSwitch from "./ColorModeSwitch";

const NavBar = () => {
  return (
    <nav className="d-flex align-items-center gap-2">
      <img src={logo} alt="Game Hub" width={60} height={60} />
      <SearchInput />
      <ColorModeSwitch />
    </nav>
  );
};

export default NavBar;
