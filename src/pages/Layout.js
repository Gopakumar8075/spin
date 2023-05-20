import { Outlet } from "react-router-dom";
import NavBar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

const Layout = () => {
  return (
    <>
<NavBar/>
      <main className="bodyparams">
        <Outlet />
      </main>
<Footer/>
    </>
  );
};

export default Layout;
