import React from "react";
import { videos } from "../../backend/db/videos";
import { Banner, VideoCardHorizontal } from "../../components";
import "./LikedVideos.css";

const LikedVideos = () => {
  return (
    <div className="content">
      <Banner title="Liked Videos" />
      <div className="videos-wrapper">
        {videos.map((video) => (
          <VideoCardHorizontal key={video._id} {...video} cardType={"like"} />
        ))}
      </div>
    </div>
  );
};

export default LikedVideos;
