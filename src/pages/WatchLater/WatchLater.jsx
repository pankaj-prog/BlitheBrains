import React from "react";
import { Banner } from "../../components";
import { videos } from "../../backend/db/videos";
import { VideoCardHorizontal } from "../../components";
import "./WatchLater.css";

const WatchLater = () => {
  return (
    <div className="content">
      <Banner title="Watch Later" />
      <div className="videos-wrapper">
        {videos.map((video) => (
          <VideoCardHorizontal key={video._id} {...video} />
        ))}
      </div>
    </div>
  );
};

export default WatchLater;
