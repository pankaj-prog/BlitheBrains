import React, { useEffect } from "react";
import { Banner, VideoCardHorizontal } from "../../components";
import "./LikedVideos.css";

import { useAxios } from "../../utils/useAxios";
import { useAuth, useLikedVideos } from "../../context";
import { useNavigate } from "react-router-dom";

const LikedVideos = () => {
  const { makeRequest, response } = useAxios();
  const { encodedToken } = useAuth();
  const { likedVideoList, setLikedVideoList } = useLikedVideos();

  const navigate = useNavigate();

  useEffect(() => {
    makeRequest({
      method: "get",
      url: "/api/user/likes",
      headers: {
        authorization: encodedToken,
      },
    });
  }, []);

  useEffect(() => {
    if (response) {
      setLikedVideoList(response.likes);
    }
  }, [response]);

  return (
    <div className="content">
      <Banner title="Liked Videos" />
      <div className="videos-wrapper">
        {likedVideoList.length > 0 ? (
          likedVideoList.map((video) => (
            <VideoCardHorizontal key={video._id} {...video} cardType={"like"} />
          ))
        ) : (
          <div className="text-center">
            <p className="gutter-bottom-8 text-lg">
              You currently do not have any liked videos
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

export default LikedVideos;
