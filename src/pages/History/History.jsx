import React from "react";
import { videos } from "../../backend/db/videos";
import { Banner, VideoCardHorizontal } from "../../components";
import "./History.css";

const History = () => {
  return (
    <div className="content">
      <Banner title="History" />
      <p className="text-center">
        <button className="btn btn-solid-primary btn-rc gutter-bottom-24">
          Clear History
        </button>
      </p>
      <div className="videos-wrapper">
        {videos.map((video) => (
          <VideoCardHorizontal
            key={video._id}
            video={video}
            cardType={"history"}
          />
        ))}
      </div>
    </div>
  );
};

export default History;
