import React from "react";
import { videos } from "../../backend/db/videos";
import { Banner } from "../../components";
import VideoCard from "./VideoCard";
import "./Explore.css";

const Explore = () => {
  return (
    <div className="explore-page content ">
      <Banner title="Explore Videos" />
      <section className="videos-wrapper">
        {videos.map((video) => (
          <VideoCard key={video._id} {...video} />
        ))}
      </section>
    </div>
  );
};

export default Explore;
