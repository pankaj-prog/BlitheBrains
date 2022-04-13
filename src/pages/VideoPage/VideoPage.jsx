import React from "react";

import { VideoSection } from "./components";
import "./VideoPage.css";

import { videos } from "../../backend/db/videos";
import { VideoCardHorizontal } from "../../components";

const VideoPage = () => {
  return (
    <div className="video-page content ">
      <VideoSection />
      <section className="related-videos-section">
        <h2 className="heading text-center gutter-bottom-24">Related Videos</h2>
        <div className="videos-wrapper">
          {videos.map((video) => (
            <VideoCardHorizontal key={`${video._id}vs`} {...video} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default VideoPage;
