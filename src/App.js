import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { RoutesWithSidebar, PrivateRoutes } from "./components/";

import { useLocation, useNavigate } from "react-router-dom";

import {
  Explore,
  History,
  Home,
  LikedVideos,
  Login,
  Page404,
  Playlist,
  Signup,
  WatchLater,
} from "./pages";

function App() {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    location.pathname == "/" && navigate("/home");
  }, [location]);

  return (
    <div className="app">
      <Routes>
        <Route element={<RoutesWithSidebar />}>
          <Route path="/home" element={<Home />} />
          <Route path="/explore" element={<Explore />} />

          <Route element={<PrivateRoutes />}>
            <Route path="/history" element={<History />} />
            <Route path="/likedvideos" element={<LikedVideos />} />
            <Route path="/playlist" element={<Playlist />} />
            <Route path="/watchlater" element={<WatchLater />} />
          </Route>

          <Route path="*" element={<Page404 />} />
        </Route>

        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </div>
  );
}

export default App;
