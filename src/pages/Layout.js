import { Outlet, Link } from "react-router-dom";
import NavBar from "../components/Navbar/Navbar";

const Layout = () => {
  return (
    <>
<NavBar/>
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
