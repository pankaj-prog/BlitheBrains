import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { Sidebar } from "./components/";

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
    location.pathname == "/" ? navigate("/home") : undefined;
  }, [location]);

  return (
    <div className="app">
      <Sidebar />
      <main className="main-content">
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/history" element={<History />} />
          <Route path="/likedvideos" element={<LikedVideos />} />
          <Route path="/playlist" element={<Playlist />} />
          <Route path="/watchlater" element={<WatchLater />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="*" element={<Page404 />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
