import React, { useEffect } from "react";
import { Banner } from "../../components";
import { VideoCardHorizontal } from "../../components";
import "./WatchLater.css";
import { useAxios } from "../../utils/useAxios";
import { useAuth, useWatchLater } from "../../context";
import { useNavigate } from "react-router-dom";

const WatchLater = () => {
  const { makeRequest, response } = useAxios();
  const { encodedToken } = useAuth();
  const { watchLaterVideos, setWatchLaterVideos } = useWatchLater();

  const navigate = useNavigate();

  useEffect(() => {
    makeRequest({
      method: "get",
      url: "/api/user/watchlater",
      headers: {
        authorization: encodedToken,
      },
    });
  }, []);

  useEffect(() => {
    if (response) {
      setWatchLaterVideos(response.watchlater);
    }
  }, [response]);

  return (
    <div className="content">
      <Banner title="Watch Later" />
      <div className="videos-wrapper">
        {watchLaterVideos.length > 0 ? (
          watchLaterVideos.map((video) => (
            <VideoCardHorizontal key={video._id} video={video} />
          ))
        ) : (
          <div className="text-center">
            <p className="gutter-bottom-8 text-lg">
              You currently do not have any videos in watch later.
            </p>
            <button
              onClick={() => navigate("/explore")}
              className="btn btn-solid-primary btn-rc"
            >
              Explore Videos
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default WatchLater;
