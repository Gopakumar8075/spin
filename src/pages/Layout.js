import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav className="bg-gray-900">
        <ul className="flex justify-center gap-3 text-white py-3">
          <li>
            <Link to="/" className="hover:text-gray-300">
              Home
            </Link>
          </li>
          <li>
            <Link to="/profile" className="hover:text-gray-300">
              Profile
            </Link>
          </li>
          <li>
            <Link to="/game" className="hover:text-gray-300">
              Game
            </Link>
          </li>
        </ul>
      </nav>
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
