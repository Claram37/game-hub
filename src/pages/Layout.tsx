import NavBar from "../components/NavBar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="p-3">
      <NavBar />
      <Outlet />
    </div>
  );
};

export default Layout;
