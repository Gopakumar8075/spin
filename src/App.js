import "./App.css";
import {
  // BrowserRouter,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  // Routes,
  Route,
} from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Game from "./pages/Game";
import NoPage from "./pages/Nopage";
import Login, { action as loginAction } from "../src/components/Login/Login";
import Protected, { loader as protectedLoader } from "../src/utils/Protected";
import { requireAuth } from "../src/utils/requireAuth";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route element={<Protected />} loader={protectedLoader}>
        <Route
          path="profile"
          element={<Profile />}
          loader={async ({ request }) => {
            await requireAuth(request);
            return null;
          }}
        />
        <Route
          path="game"
          element={<Game />}
          loader={async ({ request }) => {
            await requireAuth(request);
            return null;
          }}
        />
      </Route>
      <Route path="*" element={<NoPage />} />
      <Route path="login" element={<Login />} action={loginAction} />
    </Route>
  )
);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
