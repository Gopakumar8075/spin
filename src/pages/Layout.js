import { Outlet } from "react-router-dom";
import NavBar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

const Layout = () => {
  return (
    <>
<NavBar/>
      <main>
        <Outlet />
      </main>
<Footer/>
    </>
  );
};

export default Layout;
