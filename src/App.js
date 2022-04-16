import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import {
  RoutesWithSidebar,
  PrivateRoutes,
  RouteWithNavbar,
  AlertContainer,
  ScrollToTopButton,
  ScrollToTop,
} from "./components/";
import Mockman from "mockman-js";

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
  VideoPage,
  WatchLater,
} from "./pages";

function App() {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    location.pathname == "/" && navigate("/home");
  }, [location]);

  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route element={<RoutesWithSidebar />}>
          <Route path="/home" element={<Home />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/video/:videoId" element={<VideoPage />} />

          <Route element={<PrivateRoutes />}>
            <Route path="/history" element={<History />} />
            <Route path="/likedvideos" element={<LikedVideos />} />
            <Route path="/playlist" element={<Playlist />} />
            <Route path="/watchlater" element={<WatchLater />} />
          </Route>

          <Route path="*" element={<Page404 />} />
        </Route>
        <Route element={<RouteWithNavbar />}>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/mock" element={<Mockman />} />
        </Route>
      </Routes>
      <AlertContainer />
      <ScrollToTopButton />
    </>
  );
}

export default App;
